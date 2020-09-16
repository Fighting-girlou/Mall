import Toast from './toast'

const obj = {}
// 插件默认里面传了vue
obj.install = function (Vue) {
  // 1.创建组件构造器
  const ToastStructor = Vue.extend(Toast)
  // 2.以new的方式，根据组件构造器，可以创建出一个新的组件对象
  const toast = new ToastStructor()
  // 3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  // 4.将组件对象插入dom中，toast.$el 对应的就是刚刚创建的div元素
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}
export default obj
