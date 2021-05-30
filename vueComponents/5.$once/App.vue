<template>
    <div>
        <Header></Header>
        <div class="container">
            <!-- props -->
            <!-- <Add :addComment="addComment"></Add> -->

            <!-- 自定义事件麻烦写法 -->
            <Add ref="aa"></Add>

            <!-- 自定义事件简便写法 以后常用-->
            <!-- <Add @addComment="addComment"></Add> -->

            <List :coms="comments" :deleteComment="deleteComment"></List>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Add from "@/components/Add";
    import List from "@/components/List"
    export default {
        name: '',
        components: {
            Header,
            Add,
            List
        },
        // 自定义事件麻烦写法
        mounted() {
            // 对Add组件对象绑定自定义事件
            // this.$refs.aa.$on('addComment', this.addComment)

            // 使用@once绑定的事件只能被触发一次
            this.$refs.aa.$once('addComment', this.addComment)
        },
        data() {
            return {
                comments: [
                    { id: "001", content: 'Vue牛逼', username: 'jmz' },
                    { id: "002", content: 'Vue可以', username: 'mrx' },
                    { id: "003", content: 'Vue不错', username: 'jmz' }
                ]
            }
        },
        methods: {
            addComment(comment) {
                // 数据在哪里，操作数据的方法就在哪里，哪里需要操作数据，我们是把操作数据的方法传过来，让其调用
                // 在这里我们把App当中操作评论的方法addComment传递给Add这个组件去调用添加评论。
                this.comments.unshift(comment)
            },
            deleteComment(index) {
                // 根据id找到要删除的是哪个元素
                // 再用数组的方法删除这个元素
                this.comments.splice(index, 1)
            }
        }
    }
</script>

<style scoped>

</style>