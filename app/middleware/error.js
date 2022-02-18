let error = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status == 401) {
            ctx.body = {
                status: -1,
                message: '用户信息验证失败, 请重新登录',
            };
        }else{
            ctx.status = err.statusCode || err.status || 500;
            ctx.body = {
                status: err.statusCode || err.status || 500,
                message: err.message,
                name: err.name
            };
        }
    }
};

export default error;
