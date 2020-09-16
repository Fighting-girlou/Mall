import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home')
const category = () => import('views/category/category')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const detail = () => import('views/detail/detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: home,
    meta: {
      istrue: true
    }
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta: {
      istrue: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    meta: {
      istrue: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: {
      istrue: true
    }
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: detail,
    meta: {
      istrue: false
    }
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
