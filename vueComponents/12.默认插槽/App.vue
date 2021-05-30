<template>
    <div>
        <Child>
            <template>
                <button>点我</button>
            </template>
        </Child>

        <Child>
            <template>
                <p>pp</p>
            </template>
        </Child>
    </div>
</template>

<script>
    import Child from '@/components/Child.vue'
    export default {
        name: '',
        components: {
            Child
        }
    }
</script>

<style scoped>

</style>