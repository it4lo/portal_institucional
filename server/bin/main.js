import { config } from 'dotenv'
import app from '../src/app';
import { MongoDB } from '@database';
import router from '../src/services/routes';

(async function () {
  await config();
  await MongoDB.connect(process.pid)
  //await router(app);
})();
