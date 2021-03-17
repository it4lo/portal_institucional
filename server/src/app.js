import express from 'express';
import { Authenticate } from '@middlewares';
import path from 'path';
import cors from 'cors';

import { userRoutes } from './services/users'
import { sessionRoutes } from './services/sessions';
import { collRoutes } from './services/collaborators';
import { postRoutes } from './services/posters';
import { managementRoutes } from './services/managements';
import { positionRoutes } from './services/positions';
import { commentRoutes } from './services/comments';
import { favRoutes } from './services/favs';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Authenticate);

app.use('/users', userRoutes);
app.use('/session', sessionRoutes);
app.use('/collaborators', collRoutes);
app.use('/posts', postRoutes);
app.use('/managements', managementRoutes);
app.use('/positions', positionRoutes);
app.use('/comments', commentRoutes);
app.use('/favs', favRoutes); 


app.use('/images', express.static(path.resolve(__dirname, '..', 'utils', 'images')));
app.listen(3050);

export default app;


