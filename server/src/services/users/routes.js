import express from 'express';
import  * as controller from './controller'

export default express.Router()
.post('/', controller.store)
.get('/', controller.index);