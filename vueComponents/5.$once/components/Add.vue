<template>
    <div class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input type="text" class="form-control" placeholder="用户名" v-model="username">
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: '',
        // props: ['addComment'], // props接收到的数据最终也会混入到vm身上
        data() {
            return {
                username: '',
                content: ''
            }
        },
        components: {

        },
        methods: {
            addC() {
                // 拿到用户输入的数据
                let { username, content } = this
                if (username.trim() && content.trim()) {
                    let id = Date.now()
                    // 把数据给变成一个对象
                    let obj = {
                        id,
                        username,
                        content
                    }
                    // 把数据给添加到comments数组当中，此处addComment必须用this。
                    // this.addComment(obj)

                    // 自定义事件 触发/分发  调用回调 this代表当前组件
                    // 此处传的obj为父组件回调函数的默认参数comment
                    this.$emit('addComment', obj)
                } else {
                    alert('请输入合法的用户名和内容')
                }
                this.username = ''
                this.content = ''
            }
        }
    }
</script>

<style scoped>

</style>