import express from 'express';
import { Authenticate } from '@middlewares';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Authenticate);
app.use('/images', express.static(path.resolve(__dirname, '..', 'utils', 'images')));
app.listen(3333);

export default app;


