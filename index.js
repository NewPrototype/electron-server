const Koa = require('koa');
const config = require('./config');
const { token, serverPort } = config;
const app = new Koa();
const convert = require('koa-convert');

var cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const jwtKoa = require('koa-jwt');
const secret = 'jwt demo';
const router = require('./router');
app.use(bodyParser());
app.use(cors());

//token过期处理
app.use(function (ctx, next) {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.response.body = {
        code: 401,
        message: 'token过期,请重新登陆',
        result: {},
      };
    } else {
      throw err;
    }
  });
});
app.use(
  jwtKoa({ secret: token }).unless({
    path: [/^\/login/], //数组中的路径不需要通过jwt验证
  })
);

// console.log(ctx.header.authorization ,'----')

app.use(router.routes()).use(router.allowedMethods());
const mongodb = require('./mongodb');
mongodb.connect();
app.listen(serverPort);
