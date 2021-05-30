import Vue from 'vue'
import App from '@/App'
import store from '@/store'

new Vue({
  el: '#app',
  render: h => h(App),
  store: store  //将store对象在配置对象当中配置使用，每个组件对象当中都可以通过this.$store获取到我们的这个对象
})