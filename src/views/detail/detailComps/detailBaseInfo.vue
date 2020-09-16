<template>
  <div v-if="Object.keys(goods).length !== 0" class="baseInfo">
    <div class="detail-title">{{goods.title}}</div>
    <div class="price-box">
      <span class="price">{{goods.newprice}}</span>
      <span class="oldPrice">{{goods.oldprice}}</span>
      <span class="discount" :style= "{background:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span class="t-center">{{goods.columns[1]}}</span>
      <span class="t-right">{{goods.services[0].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key= "index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBaseInfo',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.baseInfo {
  margin-top: 10px;
  padding: 0 10px;
}
.detail-title {
  font-size: 16px;
  margin-bottom: 10px;
}
.price-box {
  margin-bottom: 25px;
}
.price-box .price {
  font-size: 24px;
  color: palevioletred;
}
.price-box .oldPrice {
  color: #6f6f6f;
}
.price-box .discount {
  color: #fff;
  font-size: 12px;
  border-radius: 40%;
  padding: 4px 6px;
}
.price-box span {
  margin-right: 10px;
}
.info-other {
  display: flex;
  padding-bottom: 20px;
  /* border-bottom: 2px solid #f9f4f4; */
  margin-bottom: 10px;
}
.info-other span {
  flex: 1;
  color: #6f6f6f;
}
.info-service  {
  display: flex;
  padding: 20px 0;
  border-bottom: 2px solid #f9f4f4;
  border-top: 2px solid #f9f4f4;
}
.info-service span {
  flex: 1;
}
.info-service span:last-child {
  text-align: right;
}
.info-service img {
  width: 15px;
}
.t-center {
  text-align: center;
}
.t-right {
  text-align: right;
}
</style>
