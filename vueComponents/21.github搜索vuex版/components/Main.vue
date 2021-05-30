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
    import { mapState } from 'vuex'
    export default {
        name: '',
        computed: {
            ...mapState(['isFirst', 'isLoading', 'errMsg', 'users'])
        }
        // data() {
        //     return {
        //         isFirst: true,
        //         isLoading: false,
        //         errorMsg: '',
        //         users: []
        //     }
        // },
        /*  mounted() {
             this.$bus.$on('searchAjax', this.searchAjax)
         },
         */
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