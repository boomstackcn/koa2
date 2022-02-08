const Router = require('koa-router');
//前置目录
const router = new Router({ prefix: '/users' });
const { login, create } = require('../controllers/users');

router.post('/login', login);
router.post('/create', create);

module.exports = router;
