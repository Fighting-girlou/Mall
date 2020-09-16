<template>
  <div class="goods-item" @click="detailClick()">
    <img :src="showImg" alt="" @load="imgLoad">
    <div class="price-box">
      <p class="title">{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsViewItem',
  props: {
    goodsitem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImg () {
      return this.goodsitem.image || this.goodsitem.show.img
    },
    paramsIid () {
      return this.goodsitem.iid || this.goodsitem.shop_id
    }
  },
  methods: {
    imgLoad () {
      this.$bus.$emit('imgLoad')
    },
    detailClick () {
      this.$router.push('/detail/' + this.paramsIid)
      console.log(this.paramsIid)
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
}
.goods-item img {
  max-width: 100%;
  border-radius: 4px;
}
.price-box {
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
}
.price-box .title {
   font-size: 13px;
   margin-bottom: 5px;
}
.price-box .price {
  color: brown;
  margin-right: 25px;
}
.price-box .collect {
  position: relative;
}
.price-box .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
