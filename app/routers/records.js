import Router from 'koa-rapid-router';
import koaBody from 'koa-body';

const routerContianer = new Router();
import records from '../controllers/records.js';

const router = routerContianer.create('/records');
router.post('/getRecords', records.getRecords);
router.post('/create', records.create);
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
    records.uploadFile
);
export default routerContianer;
