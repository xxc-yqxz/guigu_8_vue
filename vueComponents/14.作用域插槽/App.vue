<template>
    <div>
        <Child>
            <template>
                <button>点我</button>
            </template>

            <template slot="xxx">
                <a href="https://www.baidu.com">点我去百度</a>
            </template>
        </Child>

        <Child>
            <template>
                <p>pp</p>
            </template>
            <template slot="xxx">
                <span>爱你</span>
            </template>
            <template slot="yyy">
                <p>123</p>
            </template>
        </Child>

        <!-- 作用域插槽 -->
        <!-- 数据是由父组件传给子组件去展示的
            子组件展示数据的过程当中，数据的结构是由父组件说了算的
        -->

        <!-- 如果是isOver为true的前面有√ 并且颜色四hotpink
            如果没有为true的，原样展示
        -->
        <ScopedChild :todos="todos">
            <!-- <template slot-scope="scopeProps"> -->
            <!-- 父组件通过slot-scope接收子组件传递过来的数据(用对象形式接收) -->
            <template slot-scope="{todo}">
                <!-- <span v-if="scopeProps.todo.isOver" style="color:skyblue">√{{scopeProps.todo.content}}</span> -->
                <span v-if="todo.isOver" style="color:skyblue">√{{todo.content}}</span>
            </template>
        </ScopedChild>
    </div>
</template>

<script>
    import Child from '@/components/Child.vue'
    import ScopedChild from '@/components/ScoppedChild.vue'
    export default {
        name: '',
        components: {
            Child,
            ScopedChild
        },
        data() {
            return {
                todos: [
                    { id: 1, content: '抽烟', isOver: false },
                    { id: 2, content: '喝酒', isOver: true },
                    { id: 3, content: '烫头', isOver: false },
                ]
            }
        }
    }
</script>

<style scoped>

</style>