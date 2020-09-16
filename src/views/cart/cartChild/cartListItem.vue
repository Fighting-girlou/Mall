<template>
  <div class="list-item">
    <div class="left-list">
      <div class="button f-left" @click="checkButton">
        <cart-button :checked="list.isCheck"></cart-button>
      </div>
      <div class="listImg f-right">
        <img :src="list.img" alt="">
      </div>
    </div>
    <div class="right-list">
      <div class="goods-title">
        <span>{{list.title}}</span>
      </div>
      <div class="goods-des">
        <span>{{list.desc}}</span>
      </div>
      <div class="goodsPrice">
        <span class="f-left">¥{{list.price}}</span>
        <span class="f-right">x{{list.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import cartButton from './cartbutton'
export default {
  name: 'cartListItem',
  props: {
    list: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    cartButton
  },
  created () {
    console.log(this.list)
  },
  methods: {
    checkButton () {
      this.list.isCheck = !this.list.isCheck
      console.log('aaa')
    }
  }
}
</script>

<style scoped>
.list-item {
  max-width: 100%;
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
}
.left-list {
  flex-basis: 40%;
  display: flex;
  align-items: center;
}
.left-list img {
  max-width: 100%;
}
.left-list .button {
  width: 30%;
  text-align: center;
}
.left-list .listImg {
  width: 70%;
}
.right-list {
  flex-basis: 60%;
  max-width: 60%;
  padding: 15px 15px;
  box-sizing: border-box;
}
.goods-title span,
.goods-des span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin-bottom: 15px;
  overflow: hidden;
  max-width: 100%;
}
.goods-des span {
  color: #cac4c4;
}
.goodsPrice {
  margin-top: 45px;
  color: #f5820a;
}
.f-left {
  float: left;
}
.f-right {
  float: right;
}
</style>
