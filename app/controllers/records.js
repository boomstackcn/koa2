const jwt = require('jsonwebtoken');
const Record = require('../models/records');
class RecordController {
    async getRecords (ctx) {
        const records = await Record.find({});
        ctx.body = {
            status: 1,
            message: '用户列表获取成功',
            data: {
                records: records
            },
        };
    }

    async create (ctx) {
        let params = ctx.request.body;
        ctx.verifyParams({
            wechart: { type: 'string', required: true },
            accountId: { type: 'string', required: true },
        });
        let r = new Record(params)
        await r.save()
        ctx.body = {
            status: 1,
            message: '记录创建成功'
        }; 
        // const user = await User.findOne({ name: params.name });
        // if (user) {
        //     ctx.body = {
        //         status: 0,
        //         message: '用户名已存在',
        //     };
        // }else{
        //     let u = new User(params);
        //     await u.save()
        //     ctx.body = {
        //         status: 1,
        //         message: '用户创建成功'
        //     }; 
        // }
    }
}
module.exports = new RecordController();
