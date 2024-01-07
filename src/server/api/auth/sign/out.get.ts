export default defineEventHandler(async (event) => {
  try {
    uCookie().del(event, 'TOKEN-AUTH')
    return res(event, { message: 'Đăng xuất thành công' })
  }
  catch (e:any) {
    return res(event, { code: 400, message: e.toString() })
  }
})