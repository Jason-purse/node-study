/**
 * 模块化 开发
 *
 * commonjs 规范
 * 1. exports 变量 和 module.exports 指向同一个对象
 *
 * 2. 但是不能直接通过改变exports 来暴露,因为最终有效的是根据module.exports 来暴露,所以通过
 * 修改exports指向对象的内容或者改变module.exports指向的对象来实现暴露其他内容 ..
 *
 * commonjs 可以自动导入其他模块,如果没有后缀,相同名称则优先导入js后缀,然后json 形式的 ..
 * 则,导入对应文件
 *
 *
 * 其次，如果导入的是一个文件目录,这个规则是前一个规则的基础之上,如果对应目录存在一个package.json,
 * 那么会尝试导入它内容中main 对应的js 文件,否则会尝试导入index.js 或者 index.json
 *
 *
 * require 的处理过程:
 *
 *  1. 首先判断这个文件的目标位置,也就是通过path 模块解析目标文件
 *  2. 检测是否存在导入此模块的缓存
 *  3. 如果没有缓存,则尝试加载此模块,本质上就是将这个js包裹在一个函数中执行,并根据commonjs的模块规范,将
 *      外部的模块对象声明传入到此函数中,然后进行模块导出相关的动作处理 ...
 *
 *       这个函数可以通过 arguments.callee.toString() 来查看自身的方法体实现
 *  4. 将模块的导出的内容进行缓存记录
 *  5. 最终返回(如果 已经存在返回也是直接返回)
 *
 *
 *  所以 js的模块导入天然就是单例模式 ...
 *
 *
 *  require 导入模块的模块发现算法
 *  1. 在当前文件目录下查找,找到node_modules 找到对应的文件目录
 *      寻找package.json 或者 index.json  / index.js
 *
 *      反正就是找到 模块Js ...
 *
 *      如果没有找到node_modules,继续向上查找,重复此过程,
 *      一直到根目录 ..
 *
 *
 */

// 不合法
// exports = {}

// 合法
module.exports = {}

// 合法,等价于 module.exports.value 等于一个自变量对象
exports.value = {}


// 这个指向当前函数自身方法体
// arguments.callee.toString()



