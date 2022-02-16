const jwt = require('jsonwebtoken');

verify = async (ctx, next) => {
    let passUrls = [/^\/users\/login/];
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
                const user = jwt.verify(token, ctx.config.jwtSecret);
                let name = user.name;
                if (!name) {
                    ctx.throw(401);
                } else {
                    let data = await ctx.redis.get(user.name);
                    if (!data) {
                        ctx.throw(401);
                    }else{
                        ctx.redis.expire(user.name, 600)
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
