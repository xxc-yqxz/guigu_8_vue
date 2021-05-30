<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addT" />
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            // 第二种写法：写对象，可以对传递过来的属性值类型进行限定
            // addTodo:Function,第二种写法只是限定了传递过来属性值的类型
            // 第一种
            /* addTodo: {
                // 第三种,这是一个配置对象,它可以限定的属性值的更多                
                type: Function,
                required: true,     // 代表必须传
                // default:默认值   （required和default一般是择其一）
            } */
        },
        data() {
            return {
                content: ''
            }
        },
        methods: {
            addT() {
                let content = this.content
                if (content.trim()) {
                    let id = Date.now()
                    let isOver = false
                    let obj = {
                        id,
                        content,
                        isOver
                    }
                    // props 组件通信传递函数数据让子组件调用
                    // 第一种
                    // this.addTodo(obj)

                    // 第二种
                    this.$emit('addTodo', obj)

                } else {
                    alert('请输入合法数据')
                }

                this.content = ''
            }
        }
    }
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>