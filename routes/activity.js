
module.exports = router =>{
    router.get('/', async(ctx) => {
        ctx.body = "activity hello"
    })
    router.get('/index', async(ctx) => {
        ctx.body = "activity index page"
    })
    router.post('/index', async(ctx) => {
        // let postData = await parsePostData( ctx )
        console.log(ctx.request.body)
        ctx.body = "postData"
        // ctx.body = "activity post page"
    })
}
// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
      try {
        let postdata = "";
        ctx.req.addListener('data', (data) => {
          postdata += data
        })
        ctx.req.addListener("end",function(){
          let parseData = parseQueryStr( postdata )
          console.log(parseData)
          resolve( parseData )
        })
      } catch ( err ) {
        reject(err)
      }
    })
  }
  // 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    for (  let [ index, queryStr ] of queryStrList.entries()  ) {
      let itemList = queryStr.split('=')
      queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
  }
  