import type { Mongoose } from 'mongoose'
import type { IGlobalDB } from '~~/types'

import { DBPortalConfig } from './portal/config'
import { DBPortalUser, DBPortalUserLogin } from './portal/user'
import { DBPortalNewsCategory, DBPortalNews } from './portal/news'
import { DBPortalGamePlatform, DBPortalGameCategory, DBPortalGame } from './portal/game'
import { DBPortalWithdraw } from './portal/withdraw'
import { DBPortalIPAdmin, DBPortalIPBlock, DBPortalIPUser } from './portal/ip'
import { DBPortalLogAdmin, DBPortalLogUser } from './portal/log'

import { DBGameUser, DBGameUserLogin } from './game/user'
import { DBGameNewsCategory, DBGameNews } from './game/news'
import { DBGamePaymentGate, DBGamePayment } from './game/payment'
import { DBGameItem, DBGameItemBox } from './game/item'
import { DBGameShopConfig, DBGameShopItem, DBGameShopHistory } from './game/shop'
import { DBGameEventConfig, DBGameEventMilestone, DBGameEventHistory } from './game/event'
import { DBGameGiftcode, DBGameGiftcodeHistory } from './game/giftcode'
import { DBGameLogAdmin, DBGameLogUser } from './game/log'


export default (mongoose : Mongoose) : IGlobalDB => {
  return {
    Portal: {
      Config: DBPortalConfig(mongoose),

      User: DBPortalUser(mongoose),
      UserLogin: DBPortalUserLogin(mongoose),

      NewsCategory: DBPortalNewsCategory(mongoose),
      News: DBPortalNews(mongoose),

      GamePlatform: DBPortalGamePlatform(mongoose),
      GameCategory: DBPortalGameCategory(mongoose),
      Game: DBPortalGame(mongoose),

      Withdraw: DBPortalWithdraw(mongoose),
      
      IPUser: DBPortalIPUser(mongoose),
      IPAdmin: DBPortalIPAdmin(mongoose),
      IPBlock: DBPortalIPBlock(mongoose),

      LogUser: DBPortalLogUser(mongoose),
      LogAdmin: DBPortalLogAdmin(mongoose),
    },

    Game: {
      User: DBGameUser(mongoose),
      UserLogin: DBGameUserLogin(mongoose),

      NewsCategory: DBGameNewsCategory(mongoose),
      News: DBGameNews(mongoose),

      PaymentGate: DBGamePaymentGate(mongoose),
      Payment: DBGamePayment(mongoose),

      Item: DBGameItem(mongoose),
      ItemBox: DBGameItemBox(mongoose),

      ShopConfig: DBGameShopConfig(mongoose),
      ShopItem: DBGameShopItem(mongoose),
      ShopHistory: DBGameShopHistory(mongoose),

      EventConfig: DBGameEventConfig(mongoose),
      EventMilestone: DBGameEventMilestone(mongoose),
      EventHistory: DBGameEventHistory(mongoose),

      Giftcode: DBGameGiftcode(mongoose),
      GiftcodeHistory: DBGameGiftcodeHistory(mongoose),

      LogUser: DBGameLogUser(mongoose),
      LogAdmin: DBGameLogAdmin(mongoose),
    }
  }
}