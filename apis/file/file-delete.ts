/**
 * 文件删除
 *
 * unlink 或者 rm 都可以删除
 */

import fs from "fs";

fs.writeFile('./temp-file', "", err => {

    if (!err) {
        fs.unlink('./temp-file', err => {
            if (err)
                console.log("删除失败")
            else
                console.log("删除成功")


            fs.writeFile('./temp-file', "", err => {
                if (!err) {
                    fs.rm('./temp-file', err => {
                        if (err) {
                            console.log("文件删除失败")
                        } else {
                            console.log("文件删除成功")
                        }
                    })
                }
            })

        })
    }
})


// 会发现陷入了回调地狱

fs.promises.writeFile('./temp-file', '')
    .catch(err => {
        console.log("创建文件失败")
    })
    .then(() => {
        return fs.promises.unlink('./temp-file')
    })
    .catch(err => {
        console.log("文件删除失败")
    })
    .then(() => {
        console.log("文件删除成功")
    })


