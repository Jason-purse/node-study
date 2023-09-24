/**
 * 文件重命名
 */

import fs from "fs";

fs.rename('hello-world111.txt',"hello-world-1.txt",err => {
    if(err) {
        console.log("重命名错误")
    }
    else {
        console.log("重命名成功")
    }
})


/**
 * 文件移动,这和文件重命名类似
 */

fs.rename('hello-world-1.txt',"../hello-world.txt",err => {
    if(err) {
        console.log("移动失败")
    }
    else {
        console.log("移动成功")
    }
})