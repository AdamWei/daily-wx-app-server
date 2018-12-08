
module.exports = router =>{
    router.get('/detail', async(ctx) => {
        ctx.body = "my detail"
    })
    router.get('/index', async(ctx) => {
        ctx.body = "my index page"
    })
}