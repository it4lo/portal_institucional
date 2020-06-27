import { userRoutes } from './users'
import { sessionRoutes } from './session';
import { collRoutes } from './collaborator';
import { postRoutes } from './poster';


export default async function (app) {
  app.use('/users', userRoutes);
  app.use('/session', sessionRoutes);
  app.use('/collaborators', collRoutes);
  app.use('/posts', postRoutes);
  
  return app
}