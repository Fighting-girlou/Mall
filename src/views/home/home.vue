<template>
  <div>
    <navbar>
      <template #center>
        <span>购物街</span>
      </template>
    </navbar>
    <tabcontrol :tabList = '["新款","热卖","流行"]' @tabclick="tabclick" v-show='showTab' ref='tab1'></tabcontrol>
    <div class="clear"></div>
    <keep-alive>
      <scroll class="sc-content" :probe-type='3' ref='scroll' @scroll='backtopshow' :pull-up-load='true' @pullingUp='loadMore'>
        <home-swiper :swiperList= 'bannerList' @swiperImgLoad='swiperImgLoad'></home-swiper>
        <recommend :recommendList= recommendList></recommend>
        <feature></feature>
        <tabcontrol :tabList = '["新款","热卖","流行"]' @tabclick="tabclick" ref='tab'></tabcontrol>
        <goods-view :goods="showGoods"></goods-view>
      </scroll>
    </keep-alive>
    <backtop @back-click='backClick' v-show='isShow'></backtop>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import tabcontrol from 'components/common/tabControl/tabcontrol'
import scroll from 'components/common/BScroll/BScroll'
import backtop from 'components/common/backTop/backTop'
import homeSwiper from 'components/common/swiper/swiper'
import goodsView from 'components/common/goods/goodsView'
import recommend from 'views/home/childhome/recommend'
import feature from 'views/home/childhome/feature'
import { getHomeMultidata, getHomeGoods } from '@/network/home'
export default {
  data () {
    return {
      isShow: false,
      bannerList: [],
      recommendList: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      saveY: null,
      showTab: false,
      tabTop: 0,
      newRefresh: null
    }
  },
  components: {
    navbar,
    tabcontrol,
    scroll,
    backtop,
    homeSwiper,
    recommend,
    feature,
    goodsView
  },
  computed: {
    showGoods () {
      console.log(this.goods[this.currentType].list)
      return this.goods[this.currentType].list
    }
  },
  created () {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    // 监听图片是否加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh)
    this.newRefresh = () => { refresh() }
    this.$bus.$on('imgLoad', this.newRefresh)
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.$bus.$off('imgLoad', this.newRefresh)
    this.saveY = this.$refs.scroll.getscrollY()
  },
  methods: {
    // 置顶
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    backtopshow (position) {
      // 判断backtop是否显示
      this.isShow = -(position.y) > 200
      // 判断是否显示顶部tab,即形成吸顶效果
      this.showTab = -(position.y) > this.tabTop
    },
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.bannerList = res.data.banner.list
        this.recommendList = res.data.recommend.list
        console.log(res)
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    tabclick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tab.currentIndex = index
      this.$refs.tab1.currentIndex = index
      this.$refs.scroll.refresh()
    },
    debounce (func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad () {
      this.tabTop = this.$refs.tab.$el.offsetTop
      console.log(this.$refs.tab.$el.offsetTop)
    }
  }
}
</script>

<style scoped>
.clear {
  clear:both;
  margin-top: 49px;
}
.sc-content {
  height: calc(100vh - 120px);
  overflow: hidden;
}
</style>
