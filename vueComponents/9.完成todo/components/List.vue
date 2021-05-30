<template>
    <ul class="todo-main">
        <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :updateOne="updateOne" :index="index"
            :deleteOne="deleteOne"></Item>
    </ul>
</template>

<script>
    import Item from '@/components/Item'
    export default {
        name: '',
        components: {
            Item
        },
        props: ['todos', 'updateOne', 'deleteOne']
    }
</script>

<!-- scoped表示作用域，使得当前组件中的css只对当前组件起效果 -->
<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>