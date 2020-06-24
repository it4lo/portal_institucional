import express from 'express';
import { Authenticate } from '@middlewares'
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(Authenticate);
app.listen(3333);


export default app;


