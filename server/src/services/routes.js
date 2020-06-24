import { userRoutes } from './users';
import { sessionRoutes } from './session';

export default async function (app) {
  app.use('/users', userRoutes);
  app.use('/session', sessionRoutes);
  return app
}