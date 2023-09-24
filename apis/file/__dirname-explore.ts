/**
 * __dirname 表示代码所在目录的绝对路径
 *
 * 它类似于一个全局变量,可以在代码中使用,表示当前代码的所在目录的绝对路径
 *
 * 这让我们来创建文件或者操作东西都方便得多
 *
 * 因为通过相对路径去执行 那么参照物就是命令的工作空间,这可能会带来各种异常问题 ..
 *
 * 以下代码在通过 在apis目录下执行 ts-node file/__dirname-explore.ts
 * 或者 直接在当前目录下执行 ts-node __dirname-explore.ts 都是会成功的
 *
 * 这就是__dirname的好处 ...
 *
 * 如果不用它,只能在当前目录执行才能正确拿到文件信息
 */

import fs from "fs";

console.log(__dirname)

fs.readFile(__dirname + '/dir-operations.ts', err => {
    if (err) {
        console.log("文件读取失败")
    } else
        console.log("文件读取成功")
})