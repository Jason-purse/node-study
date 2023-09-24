/**
 * 目录操作
 * 1. 目录创建
 * 2. 递归目录创建
 * 3. 目录删除
 * 4. 递归目录删除
 * 5. 最新的方式进行目录删除
 *
 * 6. 文件夹遍历
 */

import fs from "fs";

/**
 * 如果文件已经存在,则创建失败.. 或者没有权限创建则失败 ...
 */
// fs.mkdir('./a', err => {
//     if (err) {
//         console.log("创建失败")
//     } else {
//         console.log("创建成功")
//     }
// })

/**
 * 同上 ..
 */
fs.mkdir("./a/b/c", {recursive: true}, err => {
    if (err) {
        console.log("递归创建目录失败")
    } else {
        console.log("递归创建目录成功")
    }
})
//
// /**
//  * 如果存在子文件夹无法删除
//  */
// fs.rmdir('./a', err => {
//     if (err)
//         console.log("删除文件失败")
//     else
//         console.log("删除文件成功")
// })
//
// /**
//  * 递归删除,如果存在子目录会尝试依次删除
//  */
// fs.rmdir('./a',{recursive: true},err => {
//     if (err) {
//         console.log("删除文件失败")
//     }
//     else {
//         console.log("删除文件成功")
//     }
// })

// 然后rmdir 已经不建议使用了,使用fs.rm
// fs.rm('./a',{recursive: true},err => {
//     if(err) {
//         console.log("递归删除失败")
//     }
//     else {
//         console.log("递归删除成功")
//     }
// })


fs.readdir('./file', (err, data) => {
    if (err) {
        console.log("文件夹读取失败")
    } else {
        // 这些都是文件和目录名
        console.log("file data: ", data)
    }
})





