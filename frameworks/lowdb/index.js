const lowdb = require("lowdb")
// 文件同步操作
const fileSync = require("lowdb/adapters/FileSync")

const dbAdapter = new fileSync(__dirname + "/db.json")

const db = lowdb(dbAdapter)

// 初始化数据结构

db.defaults({
    posts: [], user: []
}).write()

db.get("posts").push({
    value: '123'
}).write()

// 从前面压入
db.get("posts").unshift({
    value: 'unshift'
}).write()

db.set("posts", [{
    id: 123,
    value: 456
}]).write()

db.get('posts')
    .find({
        id: 123
    })
    .assign({value: 'setrr'})
    .write()

db.get('posts[0]')
    .assign({value: 'post[0]'})
    .write()

db.set('posts[0]',{value: 'post000'}).write()

db.get('posts')
    .set('[0]',{
        value: 123
    })
    .write()

db.get("posts")
    .get('[0]')
    .assign({value: 'get0 sugar'})
    .write()

console.log(db.get("posts").value()[0]);
const valueElement = db.get("posts").value();
//
valueElement[0].value = 'value234234'

db.write()


// 总结,value 和write操作是触发操作立即执行的钥匙 ...

// 在他们这些方法之前的操作都将会立即执行,如果调用了这些函数

// 那么调用之后,你可以也可以继续设置值或者其他的,但是此时相当于直接对对象操作 ..

// 操作完毕之后,直接调用db.write() 即可保存修改


// 这是读取数据的核心操作
// 也就是value函数本质上调用的就是 db.read()
var read = db.read();

// 这是read操作 句柄
console.log(read.value());
console.log(read.get("posts").value())
console.log(read.get("posts[0]").assign({value: 'read set'}).value())

db.write()
