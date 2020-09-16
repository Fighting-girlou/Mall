<template>
  <div class="toast" v-show='isShow'>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'toast',
  // 普通传参的方式
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   isShow: {
  //     type: Boolean,
  //     default () {
  //       return false
  //     }
  //   }
  // }
  // 对toast 封装插件
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (res, duration) {
      this.isShow = true
      this.message = res
      console.log(this.isShow)
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  z-index: 999;
}
</style>
