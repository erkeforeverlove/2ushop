import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import  './mock/mockSever'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters'

/* eslint-disable */
Vue.component(Button.name,Button)  //<mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用vue-router
  store  //使用vuex
})
