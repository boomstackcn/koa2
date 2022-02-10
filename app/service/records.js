const Record = require('../models/records');
class RecordService {
    async getRecords (ctx) {
        const records = await Record.find({});
        return records
    }
}
module.exports = new RecordService();
