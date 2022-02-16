const Koa = require('koa');
const path = require('path');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const parameter = require('koa-parameter');
const koaStatic = require('koa-static');

const database = require('./database/database');
const routing = require('./routers');
const tokenVerify = require('./middleware/jwt');
const customError = require('./middleware/error');
const redis = require('./database/redis');
const config = require('./config/config');

const app = new Koa();

//为ctx添加属性
app.context.redis = redis
app.context.config = config;
//global属性
global.appPath = __dirname
//全局的错误处理
app.use(customError);
//token在redis中的过期检查以及秘钥验证
app.use(tokenVerify);
//跨域
app.use(cors());
//数据库连接
database.connect();
//静态资源文件路由
app.use(koaStatic(path.join(__dirname, 'static')));
//post参数解析，若要上传图片需要在router中定义
app.use(koaBody());
//验证请求参数
app.use(parameter(app));
//设置路由
routing(app);
//启动监听
app.listen(config.port, () => console.log(`程序启动在${config.port}端口了`));
