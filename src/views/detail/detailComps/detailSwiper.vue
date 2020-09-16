<template>
  <div class="swiper-theme detail-swiper">
    <swiper :options="swiperOption" class="swiperImg">
      <swiper-slide  class="swp-silde" v-for="(item, index) in detailBanner" :key="index">
        <a :href="item.link"><img class="swp-img" :src="item" alt="" @load="imgLoad"></a>
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
  name: 'detailSwiper',
  props: {
    detailBanner: {
      type: Array,
      default () {
        return []
      }
    }
  },
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
  components: {
    Swiper,
    SwiperSlide
  },
  created () {
    // 只有一张图片时不轮播
    this.swiperOption.autoplay = this.detailBanner.length !== 1 ? {
      disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
      delay: 2000// 自动切换的时间间隔（单位ms）
    } : false
    this.swiperOption.loop = this.detailBanner.length > 1
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
.swiperImg {
  max-height: 300px;
}
.swiperImg img {
  max-width: 100%;
}
.swiper-wrapper {
  max-height: 300px;
}
</style>
