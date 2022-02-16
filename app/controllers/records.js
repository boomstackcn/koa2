const Record = require('../models/records');
const service = require('../service/records');
class RecordController {
    /**
     * @api {post} /records/getRecords 获取记录
     * @apiName getRecords
     * @apiGroup records
     *
     * @apiParamExample {json} 请求示例
     * {
     *  "userName": "Eve"
     * }
     *
     */
    async getRecords(ctx) {
        const records = await service.getRecords(ctx);
        ctx.body = {
            status: 1,
            message: '记录列表获取成功',
            data: {
                records: records,
            },
        };
    }

    async create(ctx) {
        let params = ctx.request.body;
        ctx.verifyParams({
            wechart: { type: 'string', required: true },
            accountId: { type: 'string', required: true },
        });
        let r = new Record(params);
        await r.save();
        ctx.body = {
            status: 1,
            message: '记录创建成功',
        };
    }

    async uploadFile(ctx) {
        ctx.body = {
            status: 1,
            message: '文件上传成功',
        };
    }
}
module.exports = new RecordController();
