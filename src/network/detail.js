import { request } from './request'

export function getDetails (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend () {
  return request({
    url: '/recommend'
  })
}

// 对数据进行整合
export class Goods {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newprice = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realprice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

// export class GoodsParams {
//   constructor (info, rule) {
//     this.image = info.images ? info.images[0] : ''
//     this.itemParams = info.set
//     this.ruleParams = rule.tables
//   }
// }
