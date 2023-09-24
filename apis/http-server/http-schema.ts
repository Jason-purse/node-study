/**
 * http 协议之下的 绝对路径 处理
 *
 * 在网页中,经常可能写相对路径 ...
 *
 * 1. 完整形式的具有Http协议的 绝对路径 ...
 * 2. // 开头的绝对路径,在请求的时候会以当前网站的http 协议(例如http或者https)来拼接 具体地址
 * 3. / 开头的,对应主机(服务器的)根目录下的资源请求
 *
 *
 *
 * http 协议之下的相对路径处理
 * 相对路径的Url在发送请求的时候会和当前页面的路径进行相对路径计算 ...(一般是页面的目录来相对路径解析出最终的路径地址) ...
 *
 * 如果使用了 `..` 后退路径符号,那么如果已经计算之后超过了 绝对路径的最简洁形式,那么依旧是最简洁形式 ..
 *
 * 例如 最简洁形式是http://www.baidu.com 那么 如果你`..` 过多,那么最终还是最简洁形式 http://www.baidu.com
 */