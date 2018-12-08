
const service = require('../service/userService.js')


module.exports = router =>{
    router.post('/add', async(ctx) => {
        console.log(ctx.request.body)
       let res =  await service.add(ctx.request.body)
       console.log(res)
        ctx.body = "user add"
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