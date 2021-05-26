<template>
    <div>
        <h2>我爱你jmz</h2>
        <button>爱了{{count}}</button>
    </div>
</template>

<script>
    import MyButton from 'day03/component/MyButton.vue'
    export default {
        name: '',
        data() {
            return {
                count: 0
            }
        }
    }

    // 一个.vue文件我们通常说是一个组件，但本质并不是，本质其实是定义组件的配置对象
</script>

<style scoped>
    h2 {
        color: hotpink;
    }
</style>