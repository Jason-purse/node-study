/**
 * express 服务端开发框架
 *
 * 1. 解析session
 *
 * 需要安装 express-session
 */

const express = require("express")

const app = express()

app.get('/home',(req,res) => {
    res.end("hello,home")
})

app.get("/",(req,res) => {
    res.end("value.html")
})


// fallback 兜底 任何未匹配的路由,任何其他明确路由放到此路由之前
app.all("*",(req,res) => {
    res.end("404")
})






app.listen(8090,() => {
    console.log("服务器启动成功,端口 8090 ...")
})