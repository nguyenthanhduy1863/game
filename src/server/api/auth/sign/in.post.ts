export default defineEventHandler(async (event) => {
  try {
    return res(event, { result: '' })
  }
  catch (e:any) {
    return res(event, { code: 400, message: e.toString() })
  }
})