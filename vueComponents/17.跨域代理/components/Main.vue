<template>
    <div class="row">
        <h2 v-if="isFirst">欢迎来搜索</h2>
        <h2 v-else-if="isLoading">正在搜索中</h2>
        <h2 v-else-if="errorMsg">请求失败 --- {{errMsg}}</h2>
        <div v-else class="card" v-for="(user, index) in users" :key="user.username">
            <a :href="user.userurl" target="_blank">
                <img src="user.userimg" style='width: 100px' />
            </a>
            <p class="card-text">{{user.username}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: '',
        data() {
            return {
                isFirst: true,
                isLoading: false,
                errorMsg: '',
                users: []
            }
        },
        async mounted() {
            this.$bus.$on('searchAjax', await this.searchAjax)
        },
        methods: {
            // async await 是使用同步代码实现异步效果

            // async函数返回的是promise ,async函数返回值不看return,必然返回promise
            // async函数代表这是一个异步函数，async函数返回的promise是成功还是失败 看return
            // return的结果是什么代表了promise是成功还是失败
            // 1、如果return的是一个非promise的值，代表async函数返回的promise也是成功
            // 成功的结果是return的值
            // 2、如果返回是成功的promise 代表async函数返回的promise也是成功的(它们不是同一个promise)
            // 成功的结果是return的promise的成功结果
            // 3、如果返回的是失败的promise或throw抛出错 代表async函数返回的promise是失败的
            // 失败的原因是return的promise失败的原因或抛出的错误原因

            // async function add(a,b){
            //     return a+b
            // }

            // console.log(add(10,20))




            async searchAjax(keyword) {
                // 修改页面显示的状态数据
                this.isFirst = false
                this.isLoading = true
                try {
                    const response = await axios({
                        // url: `https://api.github.com/search/users?q=${keyword}`,
                        url: 'http://localhost:8080/xxc/users/info',
                        methods: 'get'
                    })
                    console.log(response.data)
                } catch (error) {
                    console.log(error.message)
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card>img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>