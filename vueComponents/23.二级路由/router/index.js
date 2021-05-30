// 2
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Message from '@/views/Message.vue'
import News from '@/views/News.vue'
Vue.use(VueRouter)

// 3 
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/home',
            component: Home,      // 注册路由组件
            // 二级路由(子路由)
            children: [
                {
                    // path: '/home/message'
                    path: 'message',
                    component: Message
                },
                {
                    path: 'news',
                    component: News
                },
                {
                    path: '/',
                    redirect: 'message'
                }
            ]
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