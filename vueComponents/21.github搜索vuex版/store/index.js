import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    isFirst: true,
    isLoading: false,
    errorMsg: '',
    users: []
}
const mutations = {
    REQUESTING(state) {
        state.isFirst = false
        state.isLoading = true
    },
    REQUESTSUCCESS(state, users) {
        state.isLoading = false
        state.users = users
    },
    REQUESTFAILED(state, error) {
        state.isLoading = false
        state.errorMsg = error.message
    }
}
const actions = {
    // 如果是actions当中的方法，第一个参数一定是context，就算不用也要占位
    // 第二个参数才是你dispatch的时候传递过来的参数
    async searchAjax({ commit }, keyword) {
        // 修改页面显示的状态数据
        // this.isFirst = false
        // this.isLoading = true
        commit('REQUESTING')
        try {
            const response = await axios({
                // url: `https://api.github.com/search/users?q=${keyword}`,
                url: 'https://api.github.com/search/users',
                methods: 'get',
                params: {
                    q: keyword
                }
            })
            /* this.isLoading = false
            console.log(response.data) */


            // forEach map filter some every reduce 都暗含遍历
            // map
            // 功能：加工数组 根据已有的数据创建新的数据，新数组当中每一项和老数组当中每一项有对应关系
            // 参数：回调函数（item,index,arr） 每个数组项都会执行这个回调函数，返回的是一个新的项，放在新数组当中。
            // 返回值：把每一项都返回的新项组成的新数组返回

            // 箭头函数若只有一行返回，并且要返回一个对象。为了避免歧义，要加{}
            let users = response.data.items.map(item => ({
                username: item.login,
                userurl: item.url,
                userimg: item.avatar_url
            }))

            commit('REQUESTSUCCESS', users)
        } catch (error) {
            // this.isLoading = false
            // this.errorMsg = error.message
            // console.log(error.message)
            commit('REQUESTFAILED', error)
        }
    }
}
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})