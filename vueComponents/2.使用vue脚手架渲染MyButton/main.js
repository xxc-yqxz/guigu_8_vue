// /* eslint-disable no-unused-vars */
// // 局部禁用当前这个类型的错误(只禁用当前这个文件的这个类型的报错)

// 此后导入vue文件这样导入
import Vue from 'vue' // 默认引入的就是vue.runtime.common.js
// import Vue from 'vue/dist/vue.esm'  // 是我们自己找到的带解析器的版本
import App from '@/App'

/* new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
}) */


// 这个版本使用render函数的，为什么就可以使用runtime版本的Vue?


new Vue({
  el: '#app',
  render: h => h(App)
  // render 函数和我们上面写的功能差不多
  // 1.定义并注册了App
  // 2.使用了App组件。
  // 3.比上面的写法多做了一件事：寻找解析器的loader
})

// 以后我们要使用的是下面这种。
// 下面的打包出来的项目体积小
