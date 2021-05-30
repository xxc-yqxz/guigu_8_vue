<template>
    <div>
        <button @click="increment">点击加1</button>
        <button @click="decrement">点击减1</button>
        <button @click="incrementIfOdd">点击如果是奇数加1</button>
        <button @click="incrementAsync">点击异步加1</button>
        <!-- <p>{{count}}</p> -->
        <p>{{$store.state.count}}</p>
    </div>
</template>

<script>
    export default {
        name: '',
        // data() {
        //     return {
        //         count: 0
        //     }
        // },
        methods: {
            increment() {
                // this.count++
                // dispatch 和 emit都是触发分发的意思 分发触发actions当中对应的方法
                this.$store.dispatch('increment')
            },
            decrement() {
                // this.count--
                this.$store.dispatch('decrement')
            },
            incrementIfOdd() {
                // if (this.count % 2 === 1) this.count++
                this.$store.dispatch('incrementIfOdd')
            },
            incrementAsync() {
                this.$store.dispatch('incrementAsync')
                /* setTimeout(() => {
                    this.count++
                }, 1000) */
            }
        }
    }
</script>

<style scoped>

</style>