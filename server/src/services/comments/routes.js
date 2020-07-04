import express from 'express';
import  * as controller from './controller';

export default express
.Router()
.get('/', controller.index)
.post('/',controller.store)
.delete('/:id', controller.remove);