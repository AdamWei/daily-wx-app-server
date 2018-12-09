
const service = require('../service/userService.js')


module.exports = router =>{
    router.post('/add', async(ctx) => {
        let res =  await service.add(ctx.request.body)
        ctx.body = res
    })
    router.post('/login', async(ctx)=> {
        let res = await service.login(ctx.request.body)
        ctx.body = res
    })
    router.post('/edit', async(ctx)=> {
        let res = await service.edit(ctx.request.body)
        ctx.body = res
    })
    // router.get('/list', async(ctx) => {
    //    let res =  await service.list()
    //    data = {
    //        code: 200,
    //        data: res
    //    }
    //    ctx.body = data
    // })
}