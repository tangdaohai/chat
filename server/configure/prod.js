/**
 * 线上模式配置文件
 */

module.exports = {
  port : 3003,
  useWebpack : !0,
  mongoURI : "mongodb://localhost:27017/chat",
  mongoOption : {
    db: { native_parser: true },
    server: {
      poolSize: 5,
      socketOptions: { keepAlive: 1 }
    },
    replset: { rs_name: 'myReplicaSetName' },
    user: 'chat',
    pass: '123456'
  }
};
