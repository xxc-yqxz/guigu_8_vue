<template>
    <div>
        <!-- 单文件组件名字一般写大驼峰，单双标签不限。
            非单文件组件必须双标签，名字不能写大驼峰
        -->
        <MyButton></MyButton>
    </div>
</template>

<script>
    import MyButton from 'day03/components/MyButton.vue'
    export default {
        name: '',
        components: {
            // 在这里才使用导入进来的配置对象定义带注册了一个组件
            // MyButton: MyButton
            MyButton
        }
    }
</script>

<style scoped>

</style>