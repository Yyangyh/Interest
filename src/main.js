import Vue from 'vue'
import  VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import './assets/css/style.css'
import './assets/css/animate.css'
//引入外部的CSS
//import './assets/css/cssreset.css'
//import './assets/css/iconfont.css'
// 定义Vue可以使用VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)

import routers from './js/roeuter.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers
})
