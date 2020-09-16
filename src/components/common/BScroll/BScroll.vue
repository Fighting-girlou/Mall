<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  mounted () {
    // this.$nextTick(() => {
    this.scroll = new BScroll(this.$refs.wrap, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      mouseWheel: true, // 开启鼠标滚轮
      disableMouse: false, // 启用鼠标拖动
      disableTouch: false // 启用手指触摸
    })
    // })
    console.log(this.scroll)
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
      // console.log(position)
    })
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo (x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    getscrollY () {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
