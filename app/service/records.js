import Record from '../models/records.js';
class RecordService {
    async getRecords (ctx) {
        const records = await Record.find({});
        return records
    }
}
export default new RecordService();
