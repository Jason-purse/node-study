/**
 * 获取请求头内容
 */

const express = require("express")

const app = express()

const bodyParser = require('body-parser')

// 为了解析queryString

// 或者解析json
// const jsonParser = bodyParser.json()

const queryStrParser = bodyParser.urlencoded({extended: false})

app.get("/login/123/34234", queryStrParser, (req, res) => {
    // 获取请求体
// 请求体
    console.log(req.body);
    console.log(req.query)

    // 路径变量存储map
    console.log(req.params)

    res.end("login success")
})

app.listen(8091, () => {
    console.log("服务器启动在8091 ")
})