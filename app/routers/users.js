import Router from 'koa-rapid-router';

const routerContianer = new Router();
const router = routerContianer.create('/users');
import users from '../controllers/users.js';

router.post('/login', users.login);
router.post('/create', users.create);
router.post('/getUsers', users.getUsers);
router.post('/changePwd', users.changePwd);

export default routerContianer;
