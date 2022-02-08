const jwt = require('jsonwebtoken');
const User = require('../models/users');
const redis = require('../database/redis');
const { jwtSecret } = require('../config/config');
class UserController {
    async login(ctx) {
        let params = ctx.request.body;
        ctx.verifyParams({
            name: { type: 'string', required: true, max: 16 },
            pwd: { type: 'string', required: true, max: 16 },
        });
        const user = await User.findOne({ name: params.name });
        if (!user) {
            ctx.body = {
                status: 0,
                message: '用户名不存在',
            };
        } else if (user.pwd !== params.pwd) {
            ctx.body = {
                status: 0,
                message: '密码错误',
            };
        } else {
            var token = jwt.sign({ name: user.name }, jwtSecret);
            redis.set(user.name, token);
            redis.expire(600);
            ctx.body = {
                status: 1,
                message: '登录成功',
                data: {
                    token: token,
                },
            };
        }
    }

    async create(ctx) {
        let params = ctx.request.body;
        ctx.verifyParams({
            name: { type: 'string', required: true, max: 16 },
            pwd: { type: 'string', required: true, max: 16 },
        });
        const user = await User.findOne({ name: params.name });
        if (user) {
            ctx.body = {
                status: 0,
                message: '用户名已存在',
            };
        }else{
            let u = new User(params);
            await u.save()
            ctx.body = {
                status: 1,
                message: '用户创建成功'
            }; 
        }
    }
}
module.exports = new UserController();
