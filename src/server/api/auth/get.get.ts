import { IDBPortalUser, IDBPortalUserLogin, IDBPortalUserStore } from "~~/types"

export default defineEventHandler(async (event) => {
  try {
    // Get Auth
    const auth = await uAuth().portal(event)

    // Get User
    const user = await DB.Portal.User
    .findOne({ _id: auth?._id })
    .select(`
      -auth.password -auth.token -auth.block -referral
    `) as IDBPortalUser

    // Get Last Time Login
    let lastLogin = await DB.Portal.UserLogin
    .findOne({ user: auth?._id })
    .sort({ createdAt: -1 })
    .limit(1) as IDBPortalUserLogin

    if(!lastLogin){
      lastLogin = await DB.Portal.UserLogin.create({ user: auth?._id })
      user.login.month = 1
    }
    
    // Get Time Update
    const nowDate = uFormat().date(new Date())
    const lastDate = uFormat().date(lastLogin.createdAt)

    // Is Next Day
    if(
      lastDate.day != nowDate.day
      || lastDate.month != nowDate.month 
      || lastDate.year != lastDate.year
    ){
      await DB.Portal.UserLogin.create({ user: auth?._id })
      user.login.month = user.login.month + 1
      user.login.total = user.login.total + 1
      user.pay.day.money = 0
      user.pay.day.count = 0
    }

    // Is Next Month
    if(
      lastDate.month != nowDate.month
      || lastDate.year != nowDate.year
    ){
      user.login.month = 1
      user.pay.month.money = 0
      user.pay.month.count = 0
    }
    
    // Save
    await user.save()
    
    // Result
    const result : IDBPortalUserStore = {
      _id: user._id,
      auth: user.auth,
      profile: user.profile,
      currency: user.currency
    }

    return res(event, { result: result })
  }
  catch (e:any) {
    return res(event, { code: 401, message: e.toString() })
  }
})