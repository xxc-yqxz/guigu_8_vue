// 2
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
Vue.use(VueRouter)

// 3 
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/home',
            component: Home      // 注册路由组件
        },
        {
            path: '/about',
            component: About
        },
        //重定向路由
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

// 4
// main中引入