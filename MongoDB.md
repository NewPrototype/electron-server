#### Mac MongoDB安装

##### 下载
- 下载地址 
  - https://www.mongodb.com/dr/fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.5.tgz/download
- 解压
  - tar -zxvf mongodb-osx-ssl-x86_64-4.0.5.tgz
- 简化命名
  - mv mongodb-osx-ssl-x86_64-4.0.5 mongodb
- 指定MongoDb数据存储文件夹［默认路径为：/data/db］
  - mkdir-p /data/db
- 启动服务
  - cd mongodb/bin
  - sudo mongod
