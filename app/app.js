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

//全局配置
global.redis = redis;
global.jwtSecret = config.jwtSecret;
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
//post格式化以及图片上传
app.use(
    koaBody({
        multipart: true,
        formidable: {
            uploadDir: path.join(__dirname, '/public/uploads'),
            keepExtensions: true,
        },
    })
);
//验证请求参数
app.use(parameter(app));
//设置路由
routing(app);
app.listen(config.port, () => console.log(`程序启动在${config.port}端口了`));
