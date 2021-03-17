import { userRoutes } from './users'
import { sessionRoutes } from './sessions';
import { collRoutes } from './collaborators';
import { postRoutes } from './posters';
import { managementRoutes } from './managements';
import { positionRoutes } from './positions';
import { commentRoutes } from './comments';
import { favRoutes } from './favs';


export default async function (app) {
  app.use('/users', userRoutes);
  app.use('/session', sessionRoutes);
  app.use('/collaborators', collRoutes);
  app.use('/posts', postRoutes);
  app.use('/managements', managementRoutes);
  app.use('/positions', positionRoutes);
  app.use('/comments', commentRoutes);
  app.use('/favs', favRoutes);
  return app
}