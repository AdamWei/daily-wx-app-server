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
        
module.exports = routes