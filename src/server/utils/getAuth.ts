import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import type { IAuth, IRes } from '~~/types'

export default (event: H3Event) : IAuth | IRes => {
  const runtimeConfig = useRuntimeConfig()

  try {
    const token = getCookie(event, 'token-auth')
    if(!token) throw 'Không tìm thấy mã xác thực'
    
    const decoded = jwt.verify(token, runtimeConfig.TOKEN_SECRET) as IAuth
    return decoded
  }
  catch (e:any) {
    deleteCookie(event, 'token-auth', runtimeConfig.COOKIE_CONFIG)
    return res(event, { code: 401, message: e.toString() })
  }
}