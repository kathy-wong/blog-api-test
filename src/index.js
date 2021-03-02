import Koa from 'koa'
import router from './router/router'
import compose from 'koa-compose'
import cors from '@koa/cors'
import json from 'koa-json'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import path from 'path'
import helmet from 'koa-helmet'
import compress from 'koa-compress'

const app = new Koa()

const middleware = compose([
    koaBody(),
    json({ pretty: false, param: 'pretty' }),
    cors(),
    koaStatic(path.join(__dirname,'../public')),
    helmet()
])

if(process.env.NODE_ENV==='production'){
    app.use(compress())
}
app.use(middleware)

app.use(router())


app.listen('3003')