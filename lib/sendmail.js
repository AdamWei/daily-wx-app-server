const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465,
    secureConnection: true,
    auth: {
        user: 'hankanon@163.com',
        pass: 'qingdong123'
    }
});

var mailOptions = {
    from: '<hankanon@163.com>', // sender address
    to: '956374365@qq.com;hankanon@163.com;', // list of receivers
    subject: '邮件测试', // Subject line
    // text: '哈哈哈哈哈哈哈', // plaintext body
    html: '<div>哈哈哈哈哈llll哈哈</div>' // html body
}

function sendMail() {
   return new Promise((resolve, reject)=>{
        transporter.sendMail(mailOptions,function (err, data) {
            if(err) {
                reject (err)
            }
            resolve(data)
        })
   })
}
module.exports = sendMail

