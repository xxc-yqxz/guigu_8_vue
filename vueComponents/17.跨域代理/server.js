const express = require('express')
const app = express()

app.get('/users/info', function (req, res) {
    let response = {
        status: 200,
        data: {
            name: 'xxc',
            age: 33
        }
    }
    res.send(JSON.stringify(response))
})

app.listen(4000, function () {
    console.log('服务已经启动，在localhost:4000/users/info')
})