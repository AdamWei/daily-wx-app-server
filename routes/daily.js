
const service = require('../service/dailyService.js')


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
}