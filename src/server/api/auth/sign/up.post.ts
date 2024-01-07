import jwt from 'jsonwebtoken'
import md5 from "md5"
import { IDBPortalUser } from "~~/types"

export default defineEventHandler(async (event) => {
  try {
    // Libs
    const runtimeConfig = useRuntimeConfig()
    const IP = getRequestIP(event, { xForwardedFor: true })

    // Check IP
    const UserIP = await DB.Portal.IPUser.count({ ip: IP })
    const AdminIP = await DB.Portal.IPAdmin.count({ ip: IP })
    if(UserIP >= 1 && AdminIP == 0) throw 'IP đã vượt quá giới hạn tạo tài khoản'

    // Get Body
    const body = await readBody(event)
    const { username, password, email, phone, code } = body
    
    // Check Body Username
    if (!username) throw 'Vui lòng nhập tài khoản'
    if (username.length < 6 || username.length > 15) throw 'Tài khoản trong khoảng 6-15 ký tự'
    if (!!username.match(/\s/g)) throw 'Tài khoản không có khoảng cách'
    if (!(/^[a-z0-9]*$/g).test(username)) throw 'Tài khoản không có ký tự đặc biệt và viết hoa'
    if (!!username.includes('admin')
      || !!username.includes('smod')
      || !!username.includes('robot')
    ) throw 'Tài khoản không hợp lệ'

    // Check Body Email
    if (!email) throw 'Vui lòng nhập Email'
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) throw 'Định dạng Email không đúng'

    // Check Body Phone
    if (!phone) throw 'Vui lòng nhập số điện thoại'
    if (!phone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) throw 'Định dạng số điện thoại không đúng'

    // Check Body Password
    if (!password) throw 'Vui lòng nhập mật khẩu'
    if (password.length < 6 || password.length > 15) throw 'Mật khẩu trong khoảng 6-15 ký tự'
    if (!!password.match(/\s/g)) throw 'Mật khẩu không có khoảng cách'

    // Check Exist
    const userExist = await DB.Portal.User.findOne({
      $or: [
        { 'auth.username': username },
        { 'profile.phone': phone },
        { 'profile.email': email }
      ]
    }).select('auth profile') as IDBPortalUser
    if(!!userExist){
      if(userExist.auth.username == username) throw 'Tài khoản đã tồn tại'
      if(userExist.profile.phone == phone) throw 'Số điện thoại đã tồn tại'
      if(userExist.profile.email == email) throw 'Địa chỉ Email đã tồn tại'
    }

    // Check Referral Code
    const referral : any = { code: `CVV-${username.toUpperCase()}` }
    if(!!code){
      const referraler = await DB.Portal.User.findOne({ 'referral.code': code }).select('_id')
      if(!referraler) throw 'Mã mời không tồn tại'

      // Update Referraler
      referral.person = referraler._id

      // Update Count For Referraler
      await DB.Portal.User.updateOne({ _id: referral.person }, { $inc: { 'referral.count': 1 }})
    }
    
    // Create User
    const user = await DB.Portal.User.create({
      auth: {
        username: username,
        password: md5(password),
      },
      profile: {
        phone: phone,
        email: email
      },
      referral: referral
    })

    // Make Token And Cookie
    user.auth.token = jwt.sign({ _id: user._id }, runtimeConfig.TOKEN_SECRET)
    uCookie().set(event, 'TOKEN-AUTH', user.auth.token)
    await user.save()

    // Log IP
    const IPData = { user: user._id, ip: IP }
    await DB.Portal.IPUser.create(IPData)

    // Log User
    await DB.Portal.LogUser.create({
      user: user._id,
      type: 'Sign Up',
      action: `Đăng ký với IP <b>${IP}</b>`
    })

    return res(event, { message: 'Đăng ký thành công' })
  }
  catch (e:any) {
    return res(event, { code: 400, message: e.toString() })
  }
})