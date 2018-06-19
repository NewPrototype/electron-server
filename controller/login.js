const Login = require('./../model/login');
const jwt = require('jsonwebtoken');

const config= require('./../config');




async function getLogin(ctx) {

  const { userName, password } = ctx.request.query;
  let login = new Login({ userName, password });
  let auto = await Login.findOne({ userName, password });
  let userToken = {
    userName: userName
  };
  const token = jwt.sign(userToken, config.token, { expiresIn: '1 days' })  //token签名 有效期为7天 60，"2 days"，"10h"，"7d"

  if (auto) {
    ctx.response.body = {
      code: 1, message: "请求成功", result: {
        token,
        user:auto,
      }
    }
  } else {
    ctx.response.body = { code: 0, message: "用户名或密码错误", result: {} }
  }
}
const login = {
  getLogin,
}


module.exports = login;