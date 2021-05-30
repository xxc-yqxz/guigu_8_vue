// 2
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Message from '@/views/Message.vue'
import News from '@/views/News.vue'
import MessageDetail from '@/views/MessageDetail.vue'
import NewsDetail from '@/views/NewsDetail.vue'

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
                    component: Message,
                    children: [
                        {
                            // :msgid是用来接收路径传过来的params参数
                            // 匹配的同时把参数给解析出来，添加到当前这个路径对象当中（理解）
                            path: 'msgdetail/:msgid',
                            component: MessageDetail,
                            name: 'msgdetail',   // 命名路由
                            props: true, // 如果写的是布尔值，值为true会把传递过来的路径当中的params参数映射为要显示的组件当中属性去sssh8
                            props(route) {
                                return { msgid: route.params.msgid, content: route.query.content }
                            }
                            // 1.如果写的是布尔值，值为true代表会把传递过来的路径当中的params参数映射为要显示的组件当中的属性去使用
                            // 2.如果写对象，props是用来把需要自己额外传递的静态数据映射为组件当中的属性，这个对象用法只能传递一些自己添加的额外数据
                            // 3.如果写函数，可以让我们自己把params参数和query参数一起映射为组件当中的属性
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            path: 'newsdetail',
                            component: NewsDetail
                        }
                    ]
                },
                {
                    path: '',
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