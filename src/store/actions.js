export default {
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addCount', oldProduct)
        resolve('商品已重复添加')
        // oldProduct.count += 1
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('添加商品成功')
        // state.cartList.push(payload)
      }
    })
  }
}
