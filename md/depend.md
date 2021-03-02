# koa、 koa-router
# @koa/cors跨域资源共享
> Cross-Origin Resource Sharing(CORS) for koa 

```
const Koa = require('koa');
const cors = require('@koa/cors');
 
const app = new Koa();
app.use(cors());
```



# koa-body解析请求体的中间件
> A full-featured koa body parser middleware. Supports multipart, urlencoded, and json request bodies. Provides the same functionality as Express's bodyParser - multer.

```
const Koa = require('koa');
const koaBody = require('koa-body');
 
const app = new Koa();
 
app.use(koaBody());
app.use(ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});
 
app.listen(3000);
```

```
const Koa = require('koa');
const koaBody = require('koa-body');
const convert = require('xml-js');
 
const app = new Koa();
 
app.use(koaBody());
app.use(ctx => {
  const obj = convert.xml2js(ctx.request.body)
  ctx.body = `Request Body: ${JSON.stringify(obj)}`;
});
 
app.listen(3000);
```

# koa-combine-routers 组合koa路由

```
const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')
 
const dogRouter = new Router()
const catRouter = new Router()
 
dogRouter.get('/dogs', async ctx => {
  ctx.body = 'ok'
})
 
catRouter.get('/cats', async ctx => {
  ctx.body = 'ok'
})
 
const router = combineRouters(
  dogRouter,
  catRouter
)
 
module.exports = router
```
# koa-compose 组合中间件
> Compose middleware.Compose the given middleware and return middleware.


# koa-compress 压缩中间件
> Compress middleware for Koa
```
const compress = require('koa-compress')
const Koa = require('koa')
 
const app = new Koa()
app.use(compress({
  filter (content_type) {
  	return /text/i.test(content_type)
  },
  threshold: 2048,
  gzip: {
    flush: require('zlib').constants.Z_SYNC_FLUSH
  },
  deflate: {
    flush: require('zlib').constants.Z_SYNC_FLUSH,
  },
  br: false // disable brotli
}))
```

# koa-helmet 安全
> koa-helmet is a wrapper for helmet to work with koa. It provides important security headers to make your app more secure by default.

```
// This...
app.use(helmet());
 
// ...is equivalent to this:
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
```


# koa-json 美化
* pretty default to pretty response [true]
* param optional query-string param for pretty responses [none]
* spaces JSON spaces [2]
```
var json = require('koa-json');
var Koa = require('koa');
var app = new Koa();
 
app.use(json());
 
app.use((ctx) => {
  ctx.body = { foo: 'bar' };
});
```


# svg-captcha  图形验证码
> generate svg captcha in node.js
```
var svgCaptcha = require('svg-captcha');
 
var captcha = svgCaptcha.create();
console.log(captcha);
// {data: '<svg.../svg>', text: 'abcd'}
```
# koa-static 静态文件服务

```
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
 
// $ GET /package.json
app.use(serve('.'));
 
// $ GET /hello.txt
app.use(serve('test/fixtures'));
 
// or use absolute paths
app.use(serve(__dirname + '/test/fixtures'));
 
app.listen(3000);
 
console.log('listening on port 3000');
```


# @babel/core
>Babel compiler core.
# @babel/node
> Babel command line
# @babel/preset-env 
> A Babel preset for each environment.
# babel-loader 

# clean-webpack-plugin 
> A webpack plugin to remove/clean your build folder(s).

# cross-env 
> Run scripts that set and use environment variables across platforms
# nodemon 
> nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
# rimraf 
>A deep deletion module for node (like `rm -rf`) 
# terser-webpack-plugin 
> This plugin uses terser to minify your JavaScript.

# webpack 
# webpack-cli 
# webpack-merge 
# webpack-node-externals
> Easily exclude node modules in Webpack