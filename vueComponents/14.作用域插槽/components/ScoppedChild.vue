<template>
    <div>
        <ul>
            <li v-for="(todo, index) in todos" :key="todo.id">
                <slot :todo="todo">
                    {{todo.content}}
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        props: ['todos']
    }
</script>

<style scoped>

</style>