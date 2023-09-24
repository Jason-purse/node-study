/**
 * express 服务端开发框架
 *
 * 1. 在框架中尝试解析请求
 */

const express = require("express")

const app = express()

const sessionManager = require("express-session")
const MongoConnectUtil = require("connect-mongo")

// session 中间件配置
app.use(sessionManager({
    // 设置cookie的名称
    name: 'JSESSIONID',
    secret: 'jasonj',// 参与加密的字符串(签名)
    resave: true,// 是否每次请求时重新保存session
    // session 持久化选项
    store: MongoConnectUtil.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/session-store',
        // 其他选项查看api
        // 例如用户名/ 密码
    }),
    cookie: {
        httpOnly: true,// 开启之后js 无法操作
        maxAge: 1000 * 300  // sessionId 过期时间
    }
}))

app.get("/response",(req,res) => {

    // 操作session
    // session 对象
    console.log(req.session);
    req.session.username = '123'
    req.session.roles = 'admin|value|4'
    // 设置session ...


     // 当登出的时候,或者session 操作 摧毁
    res.session.destroy(() => {
        console.log("摧毁回调")
    })
})


// fallback 兜底 任何未匹配的路由,任何其他明确路由放到此路由之前
app.all("*",(req,res) => {
    res.end("404")
})







app.listen(8090,() => {
    console.log("服务器启动成功,端口 8090 ...")
})