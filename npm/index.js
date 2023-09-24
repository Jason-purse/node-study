/**
 * npm 包管理工具
 *
 * 它是nodejs 的官方包管理工具
 *
 *
 * 1. npm 包搜索
 *  npm search
 *  或者npm 官方网站 搜索
 *
 *
 * 2. 开发依赖 和 运行依赖(也称为 开发依赖和 生产依赖)
 *
 *      devDependencies / dependencies
 *
 * 3. nodemon
 *
 *      监听文件,自动重新启动、刷新node 应用程序
 *
 * 4. npm 删除依赖
 *
 *  npm remove (-g) xxx
 *
 *  5. npm 配置命令别名
 *      start 命令默认支持别名
 *      npm run start 等价于 npm start
 *
 *      一般在package.json的scripts 部分配置命令别名
 *
 *  6. nrm
 *      npm register manager
 *      来判断它到底使用的是哪一个镜像地址
 *
 *      使用某一个镜像地址
 *      nrm use taobao
 *
 *      使用官方
 *      nrm use npm
 *
 *      查看一些镜像地址
 *      nrm ls
 *
 *      查看npm 配置 来判断registry 是否配置为具体的镜像地址 ...
 *      npm config list
 *
 *
 *
 * 4. npm 发布包
 *
 *  1. 先注册账户
 *  2. 登录账户(命令行登录)
 *  3. npm  publish 推送包
 *
 *  4.1 更新包
 *
 *      修改版本号,重新发布即可
 *  5. 删除包
 *      npm unpublish --force
 *
 *      一般情况是包的作者,并且包的发布时间小于24小时,然后
 *      如果大于24小时,那么需要没有其他包依赖并且每周下载量少于300,
 *      并且只有一个维护者,则可以删除 ..
 *
 *
 */