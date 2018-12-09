const Koa = require('koa'),
      cors = require('koa-cors'),
      path = require('path'),
      routes = require('./routers'),
      bodyParser = require('koa-bodyparser'),
      requestTime = require('./middlewares/requestTime')
      static = require('koa-static'),
      logger = require('./lib/logger'),
      app = new Koa()
      port = 3000

const start = async () => {
    global.logger = logger 
    app.env = process.env.NODE_ENV || "development"
    
    app.use(requestTime)
       .use(cors())
       .use(bodyParser())
       .use(static(
            path.join( __dirname, './static')
        ))

    for(router of routes) app.use(router.routes())

    app.listen(port)

    logger.info(`app started on port ${port} env is ${app.env}`);

}
start().catch(e => console.log(e))















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


// app.use(cors())
// app.use(bodyParser())
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
// for (const router of routers) {
//     app.use(router.routes())
// }
// app.use(static(
//     path.join( __dirname, './static')
// ))
// app.use(router.routes())
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);