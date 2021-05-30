<template>
    <li>
        <label>
            <!-- 第一种写法 -->
            <!-- <input type="checkbox" :checked="todo.isOver" /> -->

            <!-- checkbox的两种用法:
                1.多个复选框一组，那么此时每个复选框都需要自己填写value的属性值，最终收集数据到一个数组当中
                2.单个复选框使用，此时不需要填写value值，v-model操作的数据，对应操作的就是复选框的checked属性
            -->
            <!-- 此时只有一个checkbox，所以不需要写数组和value1,v-model操作的数据就是checked的属性值 -->
            <input type="checkbox" v-model="isChecked">
            <span>{{todo.content}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</template>

<script>
    export default {
        name: '',
        props: {
            // 第二种写法：写对象，可以对传递过来的属性值类型进行限定
            todo: Object
        },
        /* data() {
            return {
                // 在data当中不可以写this.，因为数据可能还没传到。
                isCheck: this.todo.isOver
            }
        }, */
        computed: {
            isChecked: {
                get() {
                    return this.todo.isOver
                },
                set() {

                }
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>