import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// /* eslint-disable no-unused-vars */
// // 局部禁用当前这个类型的错误(只禁用当前这个文件的这个类型的报错)

var a;

new Vue({
  render: h => h(App),
}).$mount('#app')
