const mongoose = require('mongoose');

const config = require('./../config');

const { mongodb } = config;

// 数据库
const connect = () => {
  // 连接数据库
  mongoose.connect(mongodb.url);

  // 连接错误
  mongoose.connection.on('error', error => {
    console.log('数据库连接失败!', error);
  });

  // 连接成功
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功!');
  });

  return mongoose;
};

module.exports = { connect };
