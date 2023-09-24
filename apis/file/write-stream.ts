/**
 * 写入流
 */

import fs from "fs";

const ws = fs.createWriteStream("./hello-world.txt")

ws.write("\n你好")
ws.write("\n你好")
ws.write("\n你好")
ws.write("\n你好")
ws.write("\n你好")

ws.end(() => {
    console.log("关闭成功")
})
ws.close()
