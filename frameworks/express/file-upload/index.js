const express = require("express")
const formidable = require("formidable");

const app = express()


app.post("/file-upload", (req, res, next) => {
    const form = formidable({
        multiples: true,
        // 保存的目录位置(如果不填写,则不保存)
        uploadDir: __dirname + "../public/images",
        // 保持文件后缀
        keepExtensions: true
    })
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        console.log("解析出来的普通表单参数", fields)
        console.log("解析的文件", files)
    })
})