const Login = require('./../model/login');



async function getLogin(ctx){

  const {userName,password}=ctx.request.query;
  let login = new Login({ userName, password});
  // ctx.response.body='1';
  try {
    let auto= await login.save();
    ctx.response.body = { code: 1, message:"请求成功", result:"ok" }
 } catch(e) {
  ctx.response.body = { code: 1, message:"请求参数错误", result:"ok" }
 }
}
const login ={
  getLogin,
}


module.exports = login;