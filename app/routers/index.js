import fs from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)

export default (app) => {
    fs.readdirSync(dirname(__filename)).forEach(async (file) => {
        if (file === 'index.js') {
            return;
        }
        let route = await import(`./${file}`)
        app.use(route.default.Koa());
    });
};
