// const Router = require('koa-router')
// let router = new Router()

// router.get('/', async(ctx) => {

//     ctx.body="index "

// })

// router.get('/index', async(ctx) => {

//     ctx.body = "index page"

// })
// router.post('/wms/pda/dynamicCheck/listByPage', async(ctx)=>{
//     console.log(1234)
//     ctx.body = {
//         code: 200,
//         msg: 'success',
//         result: {
//             list:[
//                 {
//                     checkNumber: '123456789',
//                     checkPlan: 'checkPlan',
//                     checkPlanNum: 'checkPlanNum',
//                     checkResult: 'OK',
//                     checkWay: '明盘',
//                     completedTime: '2017-08-09 12:03:04'
//                 },{
//                     checkNumber: '123456789',
//                     checkPlan: 'checkPlan',
//                     checkPlanNum: 'checkPlanNum',
//                     checkResult: 'OK',
//                     checkWay: '明盘',
//                     completedTime: '2017-08-09 12:03:04'
//                 },{
//                     checkNumber: '123456789',
//                     checkPlan: 'checkPlan',
//                     checkPlanNum: 'checkPlanNum',
//                     checkResult: 'OK',
//                     checkWay: '明盘',
//                     completedTime: '2017-08-09 12:03:04'
//                 },{
//                     checkNumber: '123456789',
//                     checkPlan: 'checkPlan',
//                     checkPlanNum: 'checkPlanNum',
//                     checkResult: 'OK',
//                     checkWay: '明盘',
//                     completedTime: '2017-08-09 12:03:04'
//                 },{
//                     checkNumber: '123456789',
//                     checkPlan: 'checkPlan',
//                     checkPlanNum: 'checkPlanNum',
//                     checkResult: 'OK',
//                     checkWay: '明盘',
//                     completedTime: '2017-08-09 12:03:04'
//                 }
//             ]
//         }
//     }
// })

// module.exports = router
const   fs = require('fs'),
        path = require('path'),
        Router = require('koa-router'),

        routes = fs.readdirSync(path.join(__dirname, 'routes')).map(name => {
            const   file = path.parse(name),
                    router = new Router()

            if(file.name !== 'index') router.prefix('/' + file.name)

            require(path.join(__dirname, 'routes', name))(router)
            
            return router
        })
        console.log(routes)
module.exports = routes