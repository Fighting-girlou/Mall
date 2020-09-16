<template>
  <div>
    <detail-nav-bar @navClick= "navClick" ref="nav"></detail-nav-bar>
    <div class="clear"></div>
    <scroll class="detail-scroll" ref="scroll" :probeType= "3" :pull-up-load='true'>
      <detail-swiper :detailBanner="detailbanner"></detail-swiper>
      <detail-base-info :goods= "goods"></detail-base-info>
      <detail-shop-info :shop= "shop"></detail-shop-info>
      <detail-img :detailDes="detailImg" @imgLoad="imgLoad"></detail-img>
      <detail-params :itemParams= "itemParams" :ruleParams= "ruleParams" :paramsImg= "paramsImg" ref= "params"></detail-params>
      <detail-comment :rate= "comment" ref="comment"></detail-comment>
      <goods-view :goods= "recommend" ref="recommend"></goods-view>
    </scroll>
    <detail-bottom-bar @cartClick ="cartClick"></detail-bottom-bar>
    <backtop @back-click='backClick' v-show='isShow'></backtop>
  </div>
</template>

<script>
import { getDetails, getRecommend, Goods, Shop } from '@/network/detail'
import { debounce } from '@/network/util'
import { backTopMixin } from '@/network/mixin'

import detailNavBar from './detailComps/detailNavBar'
import detailSwiper from './detailComps/detailSwiper'
import detailBaseInfo from './detailComps/detailBaseInfo'
import detailShopInfo from './detailComps/detailShopInfo'
import detailParams from './detailComps/detailParams'
import detailImg from './detailComps/detailImg'
import detailComment from './detailComps/detailComment'
import detailBottomBar from './detailComps/detailBottomBar'

import scroll from 'components/common/BScroll/BScroll'
import goodsView from 'components/common/goods/goodsView'

export default {
  name: 'detail',
  data () {
    return {
      iid: null,
      detailbanner: [],
      goods: {},
      shop: {},
      detailImg: {},
      itemParams: [],
      ruleParams: [],
      paramsImg: null,
      comment: {},
      recommend: [],
      paramsY: [],
      getParamsY: null,
      currentIndex: 0
    }
  },
  mixins: [backTopMixin],
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailParams,
    detailImg,
    detailComment,
    detailBottomBar,
    scroll,
    goodsView
  },
  created () {
    this.iid = this.$route.params.iid
    getDetails(this.iid).then(res => {
      console.log(res)
      const data = res.result
      // 获取详情banner
      this.detailbanner = data.itemInfo.topImages
      // 获取商品基本信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //  获取描述图片
      this.detailImg = data.detailInfo
      // 获取参数信息
      this.itemParams = data.itemParams.info.set
      this.ruleParams = data.itemParams.rule.tables
      this.paramsImg = data.itemParams.info.images ? data.itemParams.info.images[0] : ''
      // 获取用户评论信息
      this.comment = data.rate
      console.log(this.goods)
    })
    getRecommend().then(res => {
      console.log(res)
      this.recommend = res.data.list
    })
    this.getParamsY = debounce(() => {
      this.paramsY = []
      this.paramsY.push('0')
      this.paramsY.push(this.$refs.params.$el.offsetTop)
      this.paramsY.push(this.$refs.comment.$el.offsetTop)
      this.paramsY.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.paramsY)
    }, 500)
  },
  mounted () {
    // 监听图片是否加载完成
    // 对于下面这部分的代码也可以用混入，封装一个mixin.js文件
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('imgLoad', () => {
      refresh()
    })
  },
  methods: {
    imgLoad () {
      this.$refs.scroll.refresh()
      this.getParamsY()
    },
    navClick (index) {
      this.$refs.scroll.scrollTo(0, -(this.paramsY[index] - 50), 200)
    },
    detailScroll (position) {
      // 获取当前y的值
      const positionY = -position.y
      const ylength = this.paramsY.length
      // 空间换时间
      // 判断语句，还可以不用后面那部分，即在数组中最后再插入一个最大值，number.maxValue,即无需后面那部分的判断，把循环语句改为i<ylength - 1
      for (let i = 0; i < ylength; i++) {
        if (this.currentIndex !== i && ((i < ylength - 1 && positionY >= this.paramsY[i] && positionY < this.paramsY[i + 1]) || (i === ylength - 1 && positionY >= this.paramsY[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      // 判断backtop是否显示
      this.isShow = -(position.y) > 200
    },
    cartClick () {
      const product = {}
      product.img = this.detailbanner[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realprice
      product.iid = this.iid
      // 把商品添加到store中
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 2000)
        console.log(this.$toast)
      })
    }
  }
}
</script>

<style scoped>
.detail-scroll {
  height: calc(100vh - 102px);
  overflow: hidden;
}
.clear {
  clear:both;
  margin-top: 55px;
}
</style>
