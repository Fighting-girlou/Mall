<template>
  <div class="bottom">
    <div class="bottom-box">
      <div class="left-bar">
        <div class="customer-service">
          <span class="customer icon"></span>
          <span>客服</span>
        </div>
        <div class="shop">
          <span class="shopicon icon"></span>
          <span>店铺</span>
        </div>
        <div class="collect">
          <span class="collecticon icon"></span>
          <span>收藏</span>
        </div>
      </div>
      <div class="right-bar">
        <div class="shopping-cart" @click="cartClick">
          <span>加入购物车</span>
        </div>
        <div class="buy">
          <span>购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBottomBar',
  methods: {
    cartClick () {
      this.$emit('cartClick')
    }
  }
}
</script>

<style scoped>
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.bottom-box {
  display: flex;
  height: 52px;
  text-align: center;
}
.bottom-box .left-bar {
  flex-basis: 45%;
  display: flex;
  background-color: #fff;
}
.bottom-box .right-bar {
  flex-basis: 55%;
  display: flex;
}
.bottom-box .left-bar>div,
.bottom-box .right-bar>div {
  flex: 1;
  align-items: center;
  justify-content: center;
}
.shopping-cart,
.buy {
  display: flex;
  background-color: #f1f106;
}
.buy {
  background-color: palevioletred;
  color: #fff;
}
.bottom-box .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.customer {
  background-position: 0 -54px!important;
}
.shopicon {
  background-position: 0 -98px!important;
}
</style>
