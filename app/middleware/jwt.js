const jwt = require('jsonwebtoken');

verify = (ctx, next) => {
    let authorization = ctx.request.headers['authorization'];
    if (authorization) {
        let token = authorization.split(' ')[1];

        jwt.verify(token, 'shhhhh', (error, decoded) => {
            if (error) {
                ctx.body = {
                    status: -1,
                    msg: '登陆失效',
                };
            } else {
                ctx.token_data = decoded;
				// ctx.redirect(301, 'http://itbilu.com');
				
                // let data = await redis.get(decoded.foo);

                // if(!data){
                // 	ctx.body = {
                // 		status: -1,
                // 		msg: '登陆失效',
                // 	};
                // }
                // console.log(data)
                // ctx.body = {
                //     status: -1,
                //     msg: '登陆失效',
                // };
            }
        });
    }
};

module.exports = verify;
