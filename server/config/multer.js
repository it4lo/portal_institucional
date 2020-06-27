import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', 'utils', 'images'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if(err) return cb(err);
        const hash = crypto.randomBytes(6).toString('hex');
        const fileName = `${hash}-${file.originalname}`;
        return cb(null, fileName);
      })
    }
  })
}