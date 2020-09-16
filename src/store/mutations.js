export default {
  addCount (state, payload) {
    payload.count++
  },
  // mutation 一般用于简单的方法，一个方法操作一个步骤，而下面这个方法包含了加数量，添加产品两个操作，所以可以用actions的方法对其操作
  addToCart (state, payload) {
    payload.isCheck = false
    state.cartList.push(payload)
  }
}
