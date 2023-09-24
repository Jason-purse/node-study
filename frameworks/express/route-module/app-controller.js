const express =require("express")
const router = express.Router({
    caseSensitive: true
})


const childRouter = express.Router({
    caseSensitive: true
})


childRouter.get("/value",(req, res) => {
    res.end("child/value")
})

// 创建子路由
router.use("/child",childRouter)


// 其实后面的函数本质上也是一个中间件函数(责任链模式)
router.get("/hello",(req,res) => {
    res.end("hello")
})

router.get("/login",(req, res) => {
    res.end("login success")
})



module.exports =  router;