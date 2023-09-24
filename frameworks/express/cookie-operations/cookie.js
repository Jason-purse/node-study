/**
 * cookie 操作
 */

const express = require('express')
const app = express()


app.get('/set-cookie', (req, res) => {
    // 设置cookie
    res.cookie('name', 'lisi', {
        maxAge: 60 * 1000,
        // 还有一些其他的选项 ... 可以设置
        // 至今我都没搞懂大多数的属性的含义


    })

    // 发送给客户端
    res.send('cookie was set')
})

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name', {
        maxAge: 0
    })

    // 或者设置cookie的最大Age ...

})


// express 中获取cookie的值 ...

// 借助cookie-parser

const cookieParser = require("cookie-parser")
app.get('get-cookie',cookieParser,(req, res) => {
    // 解析好的cookies
    console.log(req.cookies);
})