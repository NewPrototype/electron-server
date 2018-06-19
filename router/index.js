const Router = require('koa-router');
const router = new Router();


const login = require('./../controller/login');



router.get('/', (ctx, next) => {
  ctx.body = 'hi koa2'
}).get('/login', login.getLogin);

module.exports = router;
