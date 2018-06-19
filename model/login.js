/*
*
* 登陆信息
*
*/

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({
  userName: { type: String },
  password: { type: String },
});

var Login = mongoose.model('Login', loginSchema);

module.exports = Login;
