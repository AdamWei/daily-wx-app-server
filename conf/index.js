const config = {

    port: 3000,
  
    mysql: {
        host: '127.0.0.1', 
        user: 'root',
        password: '12345678',
        database:'test', // 前面建的user表位于些数据库中
        port: 3306
    }
  }
  
  module.exports = config