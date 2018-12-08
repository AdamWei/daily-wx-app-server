
module.exports = router =>{
    router.get('/', async(ctx) => {
        ctx.body = "hellow"
    })
    router.get('/index', async(ctx) => {
        ctx.body = "index page"
    })
}