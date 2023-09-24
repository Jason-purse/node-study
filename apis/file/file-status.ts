/**
 * 文件状态信息
 *
 * 1. file status
 * 2. file type
 */

import fs from "fs";

fs.stat('./file',(err,data) => {
    if(err) {
        console.log("文件读取失败")
    }
    else {
        console.log("文件的访问时间",data.atime)
        console.log("文件的修改时间",data.mtime)
        console.log("文件最后修改时的 状态时间",data.ctime)
        console.log("文件的创建时间",data.birthtime)
        console.log("文件的大小",data.size)

        console.log("是否为目录",data.isDirectory())
        console.log("是否为文件",data.isFile())
    }
})