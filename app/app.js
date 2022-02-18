import Koa from 'koa';
import cors from 'koa2-cors';
import koaBody from 'koa-body';
import parameter from 'koa-parameter';
import koaStatic from 'koa-static';

import { connect } from './database/database.js';
import routing from './routers/index.js';
import tokenVerify from './middleware/jwt.js';
import customError from './middleware/error.js';
import redis from './database/redis.js';
import config from './config/config.js';
import proxy from './middleware/proxy.js';
import path from 'path'

const __dirname = path.resolve();
const app = new Koa();
console.log(app.env);
console.log(process.env.NODE_ENV);
//为ctx添加属性
app.context.redis = redis;
app.context.config = config;
//global属性添加
global.appPath = path.join(__dirname, "./app");

//添加代理
app.use(proxy);
//全局的错误处理
app.use(customError);
//token在redis中的过期检查以及秘钥验证
app.use(tokenVerify);
//跨域
app.use(cors());
//数据库连接
connect();
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
