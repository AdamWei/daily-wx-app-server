
const service = require('../service/dailyService.js')
const sendMail = require('../lib/sendmail')

module.exports = router =>{
    router.post('/add', async(ctx) => {
        console.log(ctx.request.body)
       let res =  await service.add(ctx.request.body.data)
       console.log(res)
        ctx.body = "daily add"
    })
    router.get('/list', async(ctx) => {
       let res =  await service.list()
       data = {
           code: 200,
           data: res
       }
       ctx.body = data
    })
    router.get('/sendmail', async(ctx) => {
        let res = await sendMail()
        console.log(res)
        ctx.body = "send mail"
    })

}