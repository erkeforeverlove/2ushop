<template>
    <div>
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter===true"/>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  mounted(){
    this.getAddress(),
    this.getCategorys(),
    this.getShops(),
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getCategorys','getShops','getUserInfo']),
  },
  components: {
    FooterGuide 
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
