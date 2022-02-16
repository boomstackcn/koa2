const Router = require('koa-rapid-router');
const koaBody = require('koa-body');

const routerContianer = new Router();
const { getRecords, create, uploadFile } = require('../controllers/records');

const router = routerContianer.create('/records');
router.post('/getRecords', getRecords);
router.post('/create', create);
router.post(
    '/uploadFile',
	//上传图片时，重新设置koaBody
    koaBody({
        multipart: true,
        formidable: {
            uploadDir: global.appPath + '/public/uploads',
            keepExtensions: true,
            maxFileSize: 200 * 1024 * 1024,
        },
    }),
    uploadFile
);
module.exports = routerContianer;
