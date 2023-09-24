import * as http from "http";
import * as url from "url";
import * as http2 from "http2";

let server = http.createServer((request, response) => {
    // 获取请求方法
    console.log(request.method);
    // 只获取url中的路径和查询字符串等相关东西,不包含协议 域名等信息
    console.log(request.url)

    // 更详细的解析url  获取 查询字符串 以及 路径
    // 通过 url模块来解析 即可
    // 不建议使用了
    // 使用WHATWG API
    let urlString = url.parse(request.url!);
    // 查询字符串map
    console.log(urlString.query)
    // 路径名称
    console.log(urlString.pathname)


    // WHATWG api
    // 真实的url(只是前面的域名等相关信息是假的)
    let realUrl = new URL(request.url!,"http://localhost");
    // 查询字符串map
    console.log(realUrl.searchParams)
    // 路径名称
    console.log(realUrl.pathname)

    // http 版本
    console.log(request.httpVersion)
    // 可以获取一个map形式的header 对象
    // key 都会变成小写形式
    console.log(request.headers)
    // 获取主机名(服务器主机名)
    console.log(request.headers.host)

    let data= '';
    // 获取请求体中的数据
    request.on("data",chunk => {
        data += chunk;
    })

    request.on("end",() => {
        console.log("请求体读取完毕 ..")

        // 可以在接受完毕之后 尝试返回响应 ...
    })




    // 中文乱码解决
    response.setHeader('content-type',"text/html;charset=utf-8;")
    // 设置响应码
    response.statusCode = 200
    // 响应状态描述
    response.statusMessage = "hello world"
    // 设置header
    response.setHeader("content-type","text/html;charset=utf-8")
    response.setDefaultEncoding("utf-8")
        response.setTimeout(10 * 1000,() => {
            console.log("超时设定")
        })

    // 写入响应体
    // response.write()
    // end 表示响应结束
    // 表示流的提交或者关闭 ...
    response.end('Hello world')
})

server.listen(8080, () => {
    console.log("服务已经启动...")
})