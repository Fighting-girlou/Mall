<template>
  <div class="swiper-theme">
    <swiper :options="swiperOption">
      <swiper-slide  class="swp-silde" v-for="(item, index) in swiperList" :key="index">
        <a :href="item.link"><img class="swp-img" :src="item.image" alt="" @load="imgLoad"></a>
      </swiper-slide>
      <!-- <template #pagination> -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- </template> -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'homeSlide',
  data () {
    return {
      swiperOption: {
        initialSlide: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        watchOverflow: true,
        grabCursor: true,
        speed: 1000,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        imgload: false
      }
    }
  },
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created () {
    // 只有一张图片时不轮播
    this.swiperOption.autoplay = this.swiperList.length !== 1 ? {
      disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
      delay: 3000// 自动切换的时间间隔（单位ms）
    } : {
      stopOnLastSlide: false
    }
  },
  methods: {
    imgLoad () {
      if (!this.imgload) {
        this.$emit('swiperImgLoad')
        this.imgload = true
      }
    }
  }
}
</script>

<style scoped>
.swp-slide {
  height: 400px;
  background: pink;
  font-size: 50px;
  text-align: center;
  line-height: 400px;
}
.swp-img {
  max-width: 100%;
}
.swiper-theme {
  --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
  --swiper-navigation-color: #ccc;/* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px;/* 设置按钮大小 */
  --swiper-pagination-color: #ff6600;
}
</style>
