<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <Header :addTodo="addTodo"></Header> -->
            <Header @addTodo="addTodo"></Header>
            <!-- 此处是要把updateOne方法传递给Item,故不能用自定义事件 -->
            <List :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List>
            <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import List from "@/components/List"
    import Footer from "@/components/Footer"
    export default {
        name: '',
        components: {
            Header,
            List,
            Footer
        },
        data() {
            return {
                // getItem拿不到返回null
                todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
            }
        },
        methods: {
            addTodo(todo) {
                this.todos.unshift(todo)
            },
            updateOne(index) {
                // 此处不是修改数组的数据，而是对象的数据，所以可以直接改
                this.todos[index].isOver = !this.todos[index].isOver
            },
            deleteOne(index) {
                this.todos.splice(index, 1)
            },
            updateAll(val) {
                // 如果使用map，则说明想要一个新数组，本次不需要
                this.todos.forEach(item => item.isOver = val)
            },
            deleteAll() {
                // 把没打钩的过滤出来，把原数组修改为这个新数组
                this.todos = this.todos.filter(item => !item.isOver)
            }
        },
        watch: {
            todos: {
                deep: true, // 代表深度监视
                // 一般监视和深度监视
                // 一般监视监视的是数组的数据，而数组内部对象的数据监视不到
                // 深度监视可以监视到数组本身的数据，也可以监视到数组内部对象的数据。
                handler(newVal, oldVal) {
                    // 只要todos数据发生变化，就把变化后的数据存储到localStorage中。
                    // localStorage是前端本地存储的方案，是一个小型的数据库，存储到localStorage当中的东西都会自动转换为字符串
                    // localStorage当中有4个API
                    /* localStorage.setItem('键',值)   // 给localStorage存储数据
                    localStorage.getItem('键')      // 获取localStorage中某个数据
                    localStorage.removeItem('键')   // 删除localStorage当中某个数据
                    localStorage.clear()        // 清空~~~ */


                    // 对象数据类型转基本数据类型
                    // 计算 比较 全都转基本
                    // 判等 如果都是对象 判地址 如果有一个不是对象类型 转基本
                    // function fn() {
                    //     console.log(111)
                    // }
                    // console.log([1, 2, 3] + 100)        // '1,2,3100'
                    // console.log({ name: 'xxc' } + 100)  //'[object Object]100' 
                    // console.log(fn + 100)   // 'function fn() {console.log(111)}100'

                    // 1.数组转基本  去掉中括号 中间留下什么 就带引号  [1,2,3] '1,2,3'
                    // 2.对象转基本 固定的'[object Object]'
                    // 3.函数转基本 固定的 函数整体加字符串

                    localStorage.setItem('TODOS_KEY', JSON.stringify(newVal))   // 不能直接存对象数据类型，因为对象数据全都会私自转基本
                }
            }
        },
    }
</script>

<style scoped>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>