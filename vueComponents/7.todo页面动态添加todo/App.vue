<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <Header :addTodo="addTodo"></Header> -->
            <Header @addTodo="addTodo"></Header>
            <List :todos="todos"></List>
            <Footer></Footer>
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
                todos: [
                    { id: 1, content: '抽烟', isOver: false },
                    { id: 2, content: '喝酒', isOver: true },
                    { id: 3, content: '烫头', isOver: true }
                ]
            }
        },
        methods: {
            addTodo(todo) {
                this.todos.unshift(todo)
            }
        }
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