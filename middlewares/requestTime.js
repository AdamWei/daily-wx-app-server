const moment = require('moment')

module.exports = async(ctx, next) => {
    const start = Date.now()

    await next()

    const ms = Date.now() - start

    logger.access(`${ctx.method} ${ctx.href} - total cost ${ms}ms - ${moment(Date.now()).format('YYYY/MM/DD HH:mm:ss')} - ${ ctx.statusCode || 200 }`);
}
