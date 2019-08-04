const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa-cors')

const app = new Koa()

app.use(cors({
  maxAge: 3600 // 用来指定本次预检请求的有效期
}))

router.get('/list', (ctx, next) => {
  ctx.body = ['看书', '写字', '听歌']
  next()
})

// 启动路由
app.use(router.routes())

app.listen(9999, (err) => {
  if (err) throw err
  console.log('localhost:9999')
})