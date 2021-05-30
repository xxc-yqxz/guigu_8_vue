module.exports = {
    // 5个
    // entry: '',
    // outPut: {

    // },
    // module: {
    //     rules: [

    //     ]
    // },
    // plugins: [

    // ],
    // mode: 'development'

    // 禁用eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            "/xxc": {
                // 本身：8080/api/users/info
                // target代表转发的目标服务器   4000/api/users/info
                //pathRewrite  4000/api/users/info  和真正的地方多了个/api 需要把/api剁掉
                target: "http://localhost:4000",
                pathRewrite: { "^/xxc": "" },  //要看真正的后台接口路径当中有没有包含/api，有就不用去掉，没有就得去掉
                changeOrigin: true  // 不管改变哪个跨域的条件都会转发。
            }
        }
    }
}