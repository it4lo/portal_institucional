import express from 'express';
import  * as controller from './controller';
import multer from 'multer';
import { multerConfig } from '@config';

const upload = multer(multerConfig);

export default express
.Router()
.get('/', controller.index)
.post('/', upload.single('photoURL') ,controller.store)
.put('/:id', upload.single('photoURL') ,controller.update);