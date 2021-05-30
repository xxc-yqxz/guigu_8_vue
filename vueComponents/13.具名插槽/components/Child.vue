<template>
    <div>
        <h2>我爱你jmz</h2>
        <!-- vue当中内置的组件标签 -->
        <slot>
            <!-- 默认插槽 （只能有一个）-->
            <!-- slot内部的东西是等待则父组件使用的时候给传过来 -->
            <span>嘿嘿</span>
        </slot>

        <slot name="xxx">
            <!-- 具名插槽 （可以有多个）-->
        </slot>

        <!-- 无论是默认插槽还是具名插槽，里面都可以写东西，也可以不写东西
            如果写了东西，就看你用的时候有没有给slot传递新的东西。如果传递了，slot当中写的东西就被覆盖了
            如果你没有给slot传递新的东西，那么默认显示的就是slot当中的东西
        -->

        <slot name="yyy">
            <!-- 具名插槽 -->
            <ul>
                <li>xxc</li>
                <li>jmz</li>
            </ul>
        </slot>
    </div>
</template>

<script>
    export default {
        name: '',
    }
</script>

<style scoped>

</style>