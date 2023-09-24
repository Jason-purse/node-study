/**
 * 模版引擎
 *
 * EJS 模版引擎
 *
 * 模版引擎很多,例如pug,twing ...
 *
 *
 * 1. <%= 变量 %>  来解析表达式
 *
 * 2. 在express 中使用模版引擎,查看express-ejs.js
 */

const ejs = require("ejs")

let china = '中国'

const template = '这是<%= china %>'
let result = ejs.render(template, {china: china})

console.log(result)


const calcTemplate = '3 + 3 = <%= 3 + 3 %>'
// 还是等于 6
// 所以还是比较智能的解析
console.log(ejs.render(calcTemplate, {3: 12}))


// 列表解析,这看起来有点不可思议
// 多个表达式之间可以相互关联

console.log(ejs.render(
    `
    <% data.forEach(item => { %>
      <li><%= item %></li>
    <% }) %>
    `
    , {data: [1, 2, 3, 4, 5]}))


// 条件判断

console.log(
    ejs.render(
        `
        <% if(value) { %>
          <h1><%= value %></h1>
          <% } else { %>
          <h3><%= not found %>
          <% } %>
        `
    , {value: true}    )
)
