### 使用技术

- node
- mongodb
- react
- es6
- electron
- koa2
- mongoose

一个 window,mac 的桌面应用，这个是 node 端

### web 端 gitHub

https://github.com/NewPrototype/electron-tallyBook-web

### server 端 gitHub

https://github.com/NewPrototype/electron-tallyBook-server

如果没有 mongodb 先去去官网下载 官方链接https://www.mongodb.com/

### 运行流程

- 启动 node 端数据库服务 `cd usr/local/Cellar/mongodb/3.6.5/bin/` `./mongodb`
- 启动 node `node index.js`
- 启动 web 端 webpack `npm run start`
- 启动 web 端桌面 `npm run dev`

### 配置

- mongodb（数据库） 官方链接https://www.mongodb.com/
- Roto（数据库可视化工具） 下载地址 https://robomongo.org/
- mongoose (封装的 mongodb 框架) 官方文档 http://mongoosejs.com/
