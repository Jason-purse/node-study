const express = require("express")
const AppController = require("./app-controller.js")
const app = express()

app.use(AppController)

app.all("*",(req, res) => {
    res.end("not found")
})

app.listen(8092,() => {
    console.log("服务器启动在 " + 8092)
})