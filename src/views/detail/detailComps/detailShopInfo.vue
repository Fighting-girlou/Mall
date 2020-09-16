<template>
  <div class="shop">
    <div class="photo">
      <span class="logo"><img :src="shop.logo" alt=""></span>
      <span>{{shop.name}}</span>
    </div>
    <div class="shopBase">
      <div class="shop-info">
        <div class="sells">
          <span class="big-font">{{shop.sells | getNum(shop.sells)}}</span>
          <span class="s-font">总销量</span>
        </div>
        <div class="count">
          <span class="big-font">{{shop.goodsCount}}</span>
          <span class="s-font">全部宝贝</span>
        </div>
      </div>
      <div class="shopDes">
        <ul>
          <li v-for="(item, index) in shop.score" :key= "index">
            <span>{{item.name}}</span>
            <span :class="{better : item.isBetter}" class="des-text">{{item.score | getScore(item.score) }}</span>
            <span :class="{betScore : item.isBetter}" class="des-bg">{{item.isBetter ? '高' : '低'}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailShopInfo',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    getScore (score) {
      return score.toFixed(2)
    },
    getNum (num) {
      if (num / 10000 >= 1) {
        const rnum = num / 10000
        return rnum.toFixed(1) + '万'
      } else {
        return num
      }
    }
  }
}
</script>

<style scoped>
.shop {
  margin-bottom: 20px;
  margin-top: 20px;
}
.photo {
  display: flex;
  align-items: center;
}
.photo .logo {
  max-width: 60px;
  border-radius: 50%;
  border:1px solid #f9f4f4;
  margin-right: 15px;
}
.photo .logo img {
  max-width: 100%;
  border-radius: 50%;
}
.shopBase {
  display: flex;
  margin-top: 20px;
}
.shop-info {
  display: flex;
  flex: 1;
  border-right: 2px solid #efe6e6;
}
.shop-info span {
  display: block;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.shop-info div {
  flex: 1;
}
.shopDes {
  flex: 1;
}
.shopDes ul {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.shopDes ul li {
  flex: 1;
  text-align: center;
}
.shopDes ul li span {
  margin-right: 10px;
  font-size: 12px;
}
.big-font {
  font-size: 20px;
}
.s-font {
  font-size: 12px;
}
.better {
  color: red!important;
}
.des-text {
  color: aquamarine;
}
.des-bg {
  background: rgb(10, 235, 160);
  color: #fff;
  display: inline-block;
  margin-top: 2px;
  margin-bottom: 2px;
}
.betScore {
  background: red!important;
  color: #fff;
}
</style>
