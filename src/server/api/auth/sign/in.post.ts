import jwt from 'jsonwebtoken'
import md5 from "md5"
import type { IDBPortalUser } from "~~/types"

export default defineEventHandler(async (event) => {
  try {
    // Libs
    const runtimeConfig = useRuntimeConfig()
    const IP = getRequestIP(event, { xForwardedFor: true })

    // Check Body
    const body = await readBody(event)
    const { username, password } = body
    if(!username || !password) throw 'Vui lòng nhập đầy đủ thông tin'

    // Check Auth
    const user = await DB.Portal.User.findOne({
      'auth.username': username.toLowerCase()
    }).select('auth') as IDBPortalUser
    if(!user) throw 'Tài khoản không tồn tại'
    if(!!user.auth.block) throw 'Tài khoản đang bị vô hiệu hóa'
    if(user.auth.password !== md5(password)) throw 'Mật khẩu không chính xác'
    
    // Make Token And Cookie
    user.auth.token = jwt.sign({ _id: user._id }, runtimeConfig.TOKEN_SECRET)
    uCookie().set(event, 'TOKEN-AUTH', user.auth.token)
    await user.save()

    // Log IP
    const IPData = { user: user._id, ip: IP }
    const IPUser = await DB.Portal.IPUser.findOne(IPData).select('_id')
    if(!IPUser) await DB.Portal.IPUser.create(IPData)

    // Log User
    await DB.Portal.LogUser.create({
      user: user._id,
      type: 'Sign In',
      action: `Đăng nhập với IP <b>${IP}</b>`
    })

    return res(event, { message: 'Đăng nhập thành công' })
  }
  catch (e:any) {
    return res(event, { code: 400, message: e.toString() })
  }
})