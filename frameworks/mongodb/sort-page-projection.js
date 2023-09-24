/**
 * 数据排序 、 分页 和字段投影
 */

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

    // 创建文档的结构对象
    // 文档模型
    let BookSchema = mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })


    // 创建模型对象,对文档操作的封装对象
    let BookOperationModel = mongoose.model('books', BookSchema)


    // 通过回调,也可以用promise 来实现数据处理 ..
    BookOperationModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 12
    }, (err, data) => {
        if (err) {
            console.log("err")
            return;
        }
        // 插入成功的data
        console.log("插入成功的data" + data)
    })

    // // 字段筛选,字段投影
    // BookOperationModel.find().select({
    //     // 需要读取的属性设置为1,则表示需要的字段
    // })
    // 执行
    //     .exec(callback)

    //

    // 排序
    BookOperationModel.find().sort({
        // 排序字段,可以是多个,1 标识升序,-1 标识倒序
    })

    // 分页 offset / pagesize
    // 拿到符合条件的前三条
    // BookOperationModel.find()
    //     .skip(0).limit(3)
    //     .exec()

    // 前几条的时候,可以不需要skip,但是跳过的时候则需要 ...
})
// mongoose.connection.on('open',() => {
//     console.log("链接成功")
// })

mongoose.connection.on('error', () => {
    console.log("链接失败")
})

mongoose.connection.on('close', () => {
    console.log("连接关闭")
})

// 此代码需要真正的mongodb 数据实例能够连接才行

// 关闭Mongodb 连接
setTimeout(() => {
    mongoose.disconnect();
}, 2000)