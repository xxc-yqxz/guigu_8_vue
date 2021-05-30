<template>
    <div>
        <button @click="increment">点击加1</button>
        <button @click="decrement">点击减1</button>
        <button @click="incrementIfOdd">点击如果是奇数加1</button>
        <button @click="incrementAsync">点击异步加1</button>
        <p>{{count}}</p>
        <!-- <p>{{$store.state.count}}</p> -->
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: '',
        // data() {
        //     return {
        //         count: 0
        //     }
        // },


        // 如果是映射方法，无论是actions还算mutations的方法都映射到methods里面
        // 如果是映射属性数据，无论是state的数据还是getters当中的方法都映射到computed里面
        computed: {
            ...mapState(['count'])
        },

        // methods: mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']),
        methods: {
            // 这个函数允许传递一个数组，当回调函数名字和actions当中方法名字一样的时候
            // 名字一样的写法
            // ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])

            // 名字不一样的必须使用对象
            ...mapActions(['decrement', 'incrementIfOdd', 'incrementAsync']),
            ...mapActions({
                increment() {
                    this.$store.dispatch("iincrement");
                }
            })
            // 这个函数调用之后返回的是一个对象，这个对象如下

            // 最原始的写法
            // increment() {
            // this.count++
            // dispatch 和 emit都是触发分发的意思 分发触发actions当中对应的方法
            // this.$store.dispatch('increment')
            // this.$store.commit('INCREMENT') -->可直接使用mutation中的方法
            // },
            //     decrement() {
            //         // this.count--
            //         this.$store.dispatch('decrement')
            //     },
            //     incrementIfOdd() {
            //         // if (this.count % 2 === 1) this.count++
            //         this.$store.dispatch('incrementIfOdd')
            //     },
            //     incrementAsync() {
            //         this.$store.dispatch('incrementAsync')
            //         /* setTimeout(() => {
            //             this.count++
            //         }, 1000) */
            //     }
        }
    }
</script>

<style scoped>

</style>