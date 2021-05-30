import Vue from 'vue'
// @代表src文件夹
import App from '@/App'

// 这句话在vue3中会报错
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)

  /* render: function (h) {
    return h(App)
  } */
})