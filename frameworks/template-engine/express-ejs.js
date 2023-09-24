const express = require("express")
const path = require("path");
const app = express()

app.set("view engine",'ejs')
// 设置模版文件存放位置
app.set('views',path.resolve(__dirname,'./views'))

app.get("/",(req, res) => {
    // render 函数即可
    // 切记 模版文件存放位置需要 给对,并且模版文件是ejs ..
    res.render('index',{placeHolder: 'hello world'})
})

app.listen(8093,() => {
    console.log("服务器启动在 8093")
})