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