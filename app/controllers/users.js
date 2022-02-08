const jwt = require('jsonwebtoken');
const User = require("../models/users");
class UserController {
    async test(ctx) {
        console.log('进来了1');
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        ctx.body = {
            message: 'hello',
        };
    }

    async login(ctx) {
        console.log('进来了2');
        console.log(ctx.request.body);
        ctx.verifyParams({
            name: { type: 'string', required: false },
            pwd: { type: 'string', required: false },
        });
        const user = await User.find(ctx.request.body);
        console.log(user)
        //   if (!user) {
        //     ctx.throw(401, "用户名或密码不正确");
        //   }
        //   const { _id, name } = user;
        //   const token = jsonwebtoken.sign({ _id, name }, secret, { expiresIn: "1d" });
        //   ctx.body = { token };

        ctx.body = {
            message: 'hello',
        };
    }
}
module.exports = new UserController();
