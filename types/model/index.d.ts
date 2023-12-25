import type { Model } from 'mongoose'

export { IDBPortalConfig } from './portal/config'
export { IDBPortalUser, IDBPortalUserLogin } from './portal/user'
export { IDBPortalNewsCategory, IDBPortalNews } from './portal/news'
export { IDBPortalGamePlatform, IDBPortalGameCategory, IDBPortalGame } from './portal/game'
export { IDBPortalWithdraw } from './portal/withdraw'
export { IDBPortalIPUser, IDBPortalIPAdmin, IDBPortalIPBlock } from './portal/ip'
export { IDBPortalLogUser, IDBPortalLogAdmin } from './portal/log'

export { IDBGameAdsLanding, IDBGameAdsFrom } from './game/ads'
export { IDBGameUser, IDBGameUserLogin } from './game/user'
export { IDBGameNewsCategory, IDBGameNews } from './game/news'
export { IDBGamePaymentGate, IDBGamePayment } from './game/payment'
export { IDBGameItem, IDBGameItemBox } from './game/item'
export { IDBGameShopConfig, IDBGameShopItem, IDBGameShopHistory } from './game/shop'
export { IDBGameEventConfig, IDBGameEventMilestone, IDBGameEventHistory } from './game/event'
export { IDBGameGiftcode, IDBGameGiftcodeHistory } from './game/giftcode'
export { IDBGameLogUser, IDBGameLogAdmin } from './game/log'

export interface IGlobalDB {
  Portal: {
    Config: Model<IDBPortalConfig>

    User: Model<IDBPortalUser>
    UserLogin: Model<IDBPortalUserLogin>

    NewsCategory: Model<IDBPortalNewsCategory>
    News: Model<IDBPortalNews>

    GamePlatform: Model<IDBPortalGamePlatform>
    GameCategory: Model<IDBPortalGameCategory>
    Game: Model<IDBPortalGame>

    Withdraw: Model<IDBPortalWithdraw>

    IPUser: Model<IDBPortalIPUser>
    IPAdmin: Model<IDBPortalIPAdmin>
    IPBlock: Model<IDBPortalIPBlock>

    LogUser: Model<IDBPortalLogUser>
    LogAdmin: Model<IDBPortalLogAdmin>
  }

  Game: {
    AdsLanding: Model<IDBGameAdsLanding>
    AdsFrom: Model<IDBGameAdsFrom>

    User: Model<IDBGameUser>
    UserLogin: Model<IDBGameUserLogin>

    NewsCategory: Model<IDBGameNewsCategory>
    News: Model<IDBGameNews>

    PaymentGate: Model<IDBGamePaymentGate>
    Payment: Model<IDBGamePayment>

    Item: Model<IDBGameItem>
    ItemBox: Model<IDBGameItemBox>

    ShopConfig: Model<IDBGameShopConfig>
    ShopItem: Model<IDBGameShopItem>
    ShopHistory: Model<IDBGameShopHistory>

    EventConfig: Model<IDBGameEventConfig>
    EventMilestone: Model<IDBGameEventMilestone>
    EventHistory: Model<IDBGameEventHistory>

    Giftcode: Model<IDBGameGiftcode>
    GiftcodeHistory: Model<IDBGameGiftcodeHistory>

    LogUser: Model<IDBGameLogUser>
    LogAdmin: Model<IDBGameLogAdmin>
  }
}

declare global {
  var DB : IGlobalDB
}
