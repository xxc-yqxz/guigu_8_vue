import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this //配置总线，就是把vm挂到Vue的原型上，让所有的组件对象都能找到它，进而调用$on 和$emit
  },
  el: '#app',
  render: h => h(App)
})