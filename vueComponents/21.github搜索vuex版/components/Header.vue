<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            search() {
                let keyword = this.keyword
                if (keyword.trim()) {
                    // this.$bus.$emit('searcAjax', keyword)
                    // dispatch在触发的时候本质就是在调用actions当中的方法，可以传递参数，但是只能传递一个参数。如果要传递多个，请把多个参数封装为对象再传
                    this.$store.dispatch('searchAjax', keyword)
                } else {
                    alert('关键字必须合法')
                }

                this.keyword = ''
            }
        }
    }
</script>

<style scoped>

</style>