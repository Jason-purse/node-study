/**
 * 中间件
 *
 * 1. 全局中间件
 * 2. 路由中间件
 *
 * 这个中间件很好理解,无非就是在请求和响应的过程中做一些处理
 *
 * 将行为分为多个动作,那么这个方法必然是一个责任链模式
 *
 * (req,res,chain(next) => void
 *
 *
 * express 提供了静态资源中间件
 *
 * 全局中间件的使用是通过 app.use(...) 来实现的
 */

const express = require("express")
const app = express()


// 以下设置一个静态资源中间件
/**
 * 此静态服务器有一个问题 ..
 *  当请求到一个路径时 如果路径是一个目录 会尝试重定向 添加尾/ 的路径下
 *  并且好像还有缓存的现象 ..
 *
 *  所以,将redirect = false 设定,并且设置setMaxAge = 0 来取消缓存 ...
 */
app.use("/public", express.static(__dirname + "/public", {
    // setHeaders: (res, path, stat) => {
        // res.set('strict-transport-security', 'max-age=0');
    // }
    redirect: false
}))
app.get('/hello', (req, res,
                   next) => {
        // 这是一种路由中间件
        // 啥也不做,直接调用下一个
        next()
    },
    (req, res) => {
        res.end('hello')
    })

app.get('*', (req, res) => {
    console.log("not found")
    res.end("not found")
})

app.listen(8090, () => {
    console.log("服务启动在8090")
})