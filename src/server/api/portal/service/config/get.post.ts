import { IDBPortalConfig } from "~~/types"

export default defineEventHandler(async (event) => {
  try {
    // Types Support
    const types = ['boot', 'contact', 'about', 'social']

    // Check Type Post
    const { type } = await readBody(event)
    if(!type || !types.includes(type)) throw 'Dữ liệu đầu vào không hỗ trợ'

    // Make Select
    let select : string = type
    if(type == 'boot') select = '-about -contact -social -createdAt -updatedAt'

    // Query And Check
    const config = await DB.Portal.Config.findOne().select(select) as IDBPortalConfig
    if(!config) throw 'Không tìm thấy cấu hình trang'
    
    // Result
    return res(event, { result: config.contact })
  }
  catch (e:any) {
    return res(event, { code: 400, message: e.toString() })
  }
})