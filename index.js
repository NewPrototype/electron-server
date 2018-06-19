const Koa = require('koa');
const serverPort=require('./config').serverPort;
const app = new Koa();

// const Router = require('koa-router');
// const router = new Router();
var cors = require('koa-cors');

const router = require('./router');

app.use(cors());

const mongodb = require('./mongodb');
mongodb.connect();

app.use(router.routes()).use(router.allowedMethods());

app.listen(serverPort);
