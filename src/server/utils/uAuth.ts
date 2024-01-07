import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import type { IAuth, IDBPortalUser } from '~~/types'

const getAuthPortal = async (event: H3Event, throwError : boolean = true) : Promise<IAuth | null> => {
  try {
    const runtimeConfig = useRuntimeConfig()

    // Get Token Cookie
    const token = uCookie().get(event, 'TOKEN-AUTH')
    if(!token) throw 'Không tìm thấy mã xác thực'
    
    // JWT Decoded
    const decoded = jwt.verify(token, runtimeConfig.TOKEN_SECRET) as any

    // Check Auth
    const user = await DB.Portal.User.findOne({ _id: decoded._id }).select('auth') as IDBPortalUser
    if(!user) throw 'Xác thực tài khoản không thành công'
    if(user.auth.token != token) throw 'Tài khoản đang đăng nhập ở nơi khác, vui lòng đăng nhập lại'
    if(!!user.auth.block) throw 'Tài khoản đang bị khóa, vui lòng đăng nhập bằng tài khoản khác'

    // Result
    event.context.auth = {
      _id: user._id,
      username: user.auth.username,
      type: user.auth.type
    } 

    return event.context.auth as IAuth
  }
  catch (e:any) {
    if(!!throwError) {
      uCookie().del(event, 'TOKEN-AUTH')
      event.node.res.end(JSON.stringify({ code: 401, message: e.toString() }))
    }

    return null
  }
}


export default () => {
  return {
    portal: getAuthPortal
  }
}