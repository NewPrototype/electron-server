const Router = require('koa-router');
const router = new Router();


const login = require('./../controller/login');



router.get('/', (ctx, next) => {

}).get('/login', login.getLogin).get('/getlogin', (ctx)=>{
  ctx.response.body = { code: 1, message: "检查成功", result: {} }
});


module.exports = router;
