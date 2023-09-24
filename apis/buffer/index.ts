import {Buffer} from  "node:buffer"
/**
 * buffer api simple study
 */

let buffer = Buffer.alloc(10)

console.log(buffer)


let bufferUnsafe = Buffer.allocUnsafe(10)
console.log(bufferUnsafe)

let bufferFrom = Buffer.from("hello world")
console.log(bufferFrom)


// buffer 只能存储 0-255范围的数值,大于此范围的将舍弃高位,保留裁剪过的值 ..
// 一般来说这用不上,所以 了解即可 ..

// UTF-8中的中文字符 占三个字节
console.log(Buffer.from("你好"));