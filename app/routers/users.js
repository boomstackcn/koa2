const Router = require('koa-rapid-router');

const routerContianer = new Router()
const router = routerContianer.create('/users');
const { login, create, getUsers, changePwd } = require('../controllers/users');
router.post('/login', login);
router.post('/create', create);
router.post('/getUsers', getUsers);
router.post('/changePwd', changePwd);
module.exports = routerContianer;
