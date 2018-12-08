const Koa = require('koa');
const cors = require('koa-cors')
const path = require('path')
const routers = require('./routers')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa();
// app.use( async(ctx,next)=>{
//     console.log(ctx.set)
//     let {method, url, header} = ctx.request;

//     ctx.set('Access-Control-Allow-Origin', '*');

//     if (method.toLowerCase() === 'options') {
//         ctx.set('Access-Control-Allow-Credentials', 'true');
//         ctx.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
//         ctx.set('Access-Control-Allow-Headers', 'cache-control,content-type,hash-referer,x-requested-with,auth');

//         ctx.body = '';
//         return false;
//     }
//     next()
// });


app.use(cors())
app.use(bodyParser())
// app.use(cors({
//     origin: function (ctx) {
//         if (ctx.url === '/test') {
//             return "*"; // 允许来自所有域名请求
//         }
//         return '*';
//     },
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     // allowMethods: ['GET', 'POST', 'DELETE'],
//     // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))
for (const router of routers) {
    app.use(router.routes())
}
app.use(static(
    path.join( __dirname, './static')
))
// app.use(router.routes())
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000);