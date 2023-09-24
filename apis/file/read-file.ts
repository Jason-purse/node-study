// // 异步文件读取
import fs from "fs";

// fs.readFile('./hello-world.txt',(err, data) => {
//     if(err)
//         console.log("读取失败")
//     else
//         console.log("读取成功,data: " + data.toString())
// })
// try {
//     let data = fs.readFileSync("./hello-world.txt")
//     console.log("读取成功,data: " + data.toString())
// }catch (err) {
//     console.log("读取失败")
// }

/**
 * 文件流有两种模式
 *
 * 当flowable 的时候,自动进行read 方法的调用
 *
 * 如果重写了 readable 回调, 可以尝试手动调用read 方法 ..
 *
 * 如果是pause 模式,那么需要手动调用 read方法的调用 来触发data 回调
 */
const rs = fs.createReadStream('hello-world.txt', 'utf-8');
rs.on('data', (value) => {
    console.log("读取到数据" + value.toString())
})

// rs.on('readable', () => {
//     let chunk;
//     console.log('Stream is readable (new data received in buffer)');
//     // Use a loop to make sure we read all currently available data
//     // while (null !== (chunk = rs.read())) {
//     //     console.log(`Read ${chunk.length} bytes of data...`);
//     // }
// });

rs.on('error', (error) => {
    console.error("读取文件时发生错误：" + error);
});

rs.on("open", () => {
    console.log("文件打开了")
})

rs.on('end', () => {
    console.log("读取完毕")
})

rs.on("error", err => {
    console.log("读取错误" + err)
})

rs.on("ready", () => {
    console.log("准备好开始读取了")
})
// rs.close(() => {
//     console.log("关闭流成功")
// })

rs.on('close',() => {
    console.log("关闭流成功")
})


// 每一个Chunk 接收完毕的回调
rs.on('end',() => {
    console.log("读取完毕")
})

// 直接批量将文件进行copy
rs.pipe(fs.createWriteStream('hello-world111.txt'))

