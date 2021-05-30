import Vue from 'vue'
import App from '@/App'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store,
  el: '#app',
  render: h => h(App)
})