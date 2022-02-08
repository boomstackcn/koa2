const Router = require('koa-router');
//前置目录
const router = new Router({ prefix: '/users' });
const { login, create, getUsers } = require('../controllers/users');

router.post('/login', login);
router.post('/create', create);
router.post('/getUsers', getUsers);

module.exports = router;
