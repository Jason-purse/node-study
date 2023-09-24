// // 异步文件读取
var fs = require('fs');
//
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
var rs = fs.createReadStream('/Users/jasonj/software/develop-tools/webstorm-workspace/node-study/apis/hello-world.txt', 'utf-8');
// rs.on('readable', () => {
//     let chunk;
//     console.log('Stream is readable (new data received in buffer)');
//     // Use a loop to make sure we read all currently available data
//     while (null !== (chunk = rs.read())) {
//         console.log(`Read ${chunk.length} bytes of data...`);
//     }
// });
rs.on('data', function (value) {
    console.log("读取到数据" + value.toString());
});
rs.on('end', function () {
    console.log("读取完毕");
});
rs.on("error", function (err) {
    console.log("读取错误" + err);
});
// rs.read(rs.readableLength)
console.log(rs.readableLength);
rs.close(function () {
    console.log("关闭流成功");
});
