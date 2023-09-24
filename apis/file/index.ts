/**
 * 文件api 简单学习
 */

import fs from "fs"
import {WriteFileOptions} from "node:fs";

// 创建新文件并执行数据保存

// 相对于当前执行程序目录写入
// 例如我们在apis 目录下执行程序,那么相对于apis

// 这种是异步写入
// 如果文件不存在则新增 否则替换
fs.writeFile('./hello-world.txt', "hello world", err => {
    if (err)
        console.log("err")
    else
        console.log("写入成功")
})

// 同步写入
try {
    fs.writeFileSync('./hello-world.txt', 'hello-world')
} catch (error) {
    console.log("写入失败")
}

// 异步 文件追加
fs.appendFile('./hello-world.txt', '\nhelloworld1111', err => {
    if (err)
        console.log("追加失败")
    else
        console.log("追加成功")
})

// 同步文件追加
try {
    fs.appendFileSync('./hello-world.txt','\nhelloworld2222')
}catch (error) {
    console.log("追加失败")
}


// 异步文件追加,通过配置选项进行
fs.writeFile('./hello-world.txt','\nhelloworld-append',{flag: 'a'} as WriteFileOptions,err => {
    if (err) {
        console.log("追加失败")
    }
    else {
        console.log("追加成功")
    }
})


