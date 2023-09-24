const jsonwebtoken = require("jsonwebtoken")

//  创建 token

// 校验 token

// 详细的参考api,可以传递算法
let token = jwt.sign({
    username: '张三'
},'jasonj',{
    expiresIn: 60, // 单位为秒
})

// 校验
jwt.verify(token,'jasonj',(err,data) => {
    if(err) {
        console.log("校验失败")
        return ;
    }
    console.log("校验成功")
})