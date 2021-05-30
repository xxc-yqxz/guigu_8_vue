<template>
    <div>
        <h2>我爱你jmz</h2>
        <!-- 组件当中所写的this代表的是当前组件对象 -->
        <button @click="count++">爱了{{count}}次</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                count: 0
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: hotpink;
    }
</style>