const Router = require('koa-router');
//前置目录
const router = new Router({ prefix: '/records' });
const { getRecords, create } = require('../controllers/records');

router.post('/getRecords', getRecords);
router.post('/create', create);

module.exports = router;
