/**
 * 模块化
 *
 * 划分db 链接工具
 *
 * 这只是一个简单的方式进行数据库连接处理 ...
 *
 * 我们可以将这个封装好一点,然后 链接失败直接抛出异常,否则给出真正意义上的连接 ..
 *
 * 如果我们去封装文档模型,那些,就意味着我们又在进行crud ...
 *
 * 封装操作方法 ...
 */

// 数据连接成功之后,返回给他们 mongoose ..
const mongoose = require("mongoose");
module.exports = function (success, err) {
    const mongoose = require("mongoose")

// 链接mongodb
// 一个假设的数据库
    mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 屏蔽一些警告
    mongoose.set('strictQuery', true)

// 每次连接将执行 此函数
// 如果我们意外掉了,所以,我们可能只想连接一次,那么就用once
// 并且once 是有好处的,例如我们的web服务器可能会在连接成功之后做一些事情
// 如果每次on 都执行相关操作 这可能不合适
// 所以最好使用once
    mongoose.connection.once('open', () => {
        console.log("连接成功")
        success(mongoose)
    })
// mongoose.connection.on('open',() => {
//     console.log("链接成功")
// })

    mongoose.connection.on('error', () => {
        console.log("链接失败")
        // 错误执行
        err()
    })

    mongoose.connection.on('close', () => {
        console.log("连接关闭")
    })

// 此代码需要真正的mongodb 数据实例能够连接才行

// 关闭Mongodb 连接
    setTimeout(() => {
        mongoose.disconnect();
    }, 2000)
}