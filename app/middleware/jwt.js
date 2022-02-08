const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

verify = async (ctx, next) => {
    let passUrls = [/^\/users\/login/, /^\/users\/getUsers/];
    let isPass = true;
    passUrls.forEach((url) => {
        if (url.test(ctx.url)) {
            isPass = true;
        }
    });
    if (isPass) {
        await next();
    } else {
        let authorization = ctx.request.headers['authorization'];
        if (authorization) {
            let token = authorization;
            try {
                const user = jwt.verify(token, jwtSecret);
                let name = user.name;
                if (!name) {
                    ctx.throw(401);
                } else {
                    let data = await global.redis.get(user.name);
                    if (!data) {
                        ctx.throw(401);
                    }else{
                        global.redis.expire(user.name, 600)
                    }
                }
            } catch (error) {
                ctx.throw(401);
            }
            await next();
        } else {
            ctx.throw(401);
        }
    }
};

module.exports = verify;
