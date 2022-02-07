const jwt = require('jsonwebtoken');
class UserController {

    async test(ctx) {
		console.log("进来了1")
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        ctx.body = {
            message: 'hello',
        };
    }

	async login(ctx) {
		console.log("进来了2")
		console.log(ctx.request.body)
		ctx.body = {
            message: 'hello',
        };
    }
}
module.exports = new UserController();
