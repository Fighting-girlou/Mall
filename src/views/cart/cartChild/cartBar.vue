<template>
  <div class="cartButton">
    <div class="cart-bar" @click="allChecked">
      <cart-button :checked="isSelectAll"></cart-button>
      <span class="all">全选</span>
    </div>
    <div class="totalNum">
      <span>合计为：{{totalPrice}}</span>
    </div>
    <div class="computed" @click="compuClick">
      <span>去计算:({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
import cartButton from './cartbutton'
export default {
  name: 'cartBar',
  components: {
    cartButton
  },
  computed: {
    totalPrice () {
      return this.$store.state.cartList.filter(item => {
        return item.isCheck
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return this.$store.state.cartList.filter(item => item.isCheck).length
    },
    isSelectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.find(item => !item.isCheck))
      // 或者过滤查看是否有为选的
      // return !(this.$store.state.cartList.filter(item => !item.isCheck).length)
    }
  },
  methods: {
    allChecked () {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => (item.isCheck = false))
      } else {
        this.$store.state.cartList.forEach(item => (item.isCheck = true))
      }
    },
    compuClick () {
      if (this.checkLength > 0) {
        this.$toast.show('您选择的' + this.checkLength + '项商品正在结算', 2000)
      } else {
        this.$toast.show('请您至少选择一项商品', 2000)
      }
      // this.$emit('tipClick')
    }
  }
}
</script>

<style scoped>
.cartButton {
  display: flex;
}
.cartButton>div {
  flex: 1;
  padding-left: 15px;
  display: flex;
  align-items: center;
}
.all {
  margin-left: 10px;
}
.computed {
  justify-content: center;
  background: red;
  padding: 0;
  margin-left: 15px;
}
</style>
