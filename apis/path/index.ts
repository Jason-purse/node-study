/**
 * path 模块的相关api
 *
 * 常用的 .
 *
 * 1. resolve
 *
 *   第一个参数一般是绝对路径(也就是__dirname,一般是这样)
 *   如果 后续参数也有传递绝对路径的情况 会导致以后续的绝对路径进行拼接,这很好理解,resolve用来相对路径解析路径,那么相对解析一个绝对路径,
 *   那么自然也就是绝对路径 ...
 *
 * 2. path.sep
 *
 *      分隔符
 *      在不同操作系统下,显示不同 window \ linux /
 *
 * 3. __filename
 *
 *      表示当前文件的绝对路径
 *      和__dirname 不同,表示当前文件所在目录的绝对路径
 *
 * 4. basename 用来获取文件名(不携带路径信息)
 *
 *
 * 5. dirname
 *  获取一个文件的文件目录部分路径
 *
 *  6. extname
 *
 *      获取文件扩展名
 */


import path from "path";

console.log(path.resolve(__dirname, 'value.html'));

console.log(path.resolve(__dirname, "/server", 'value.html'));

console.log(path.sep);


console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename))