const Router = require('koa-router');
//前置目录
const router = new Router({ prefix: '/users' });
const { test, login } = require('../controllers/users');

router.post('/test', test);
router.post('/login', login);

module.exports = router;
