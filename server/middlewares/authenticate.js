import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { configAuth } from '@config';

export default async function (req, res, next) {

  const { url } = req;


  if (!await needValidate(url)) return next();

  const authHeader = req.headers.authorization;


  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'Token is not valid' });
  }

  try {

    const dedoced = await promisify(jwt.verify)(token, configAuth.secret);

    req.userId = dedoced.id;

    return next();

  } catch (error) {
    if (error.name === "TokenExpiredError") { 
      return res.status(401).json({ error: "Token expired" });
    }
  }

  async function needValidate(url) {
    const whitelist = [
      '/session',
      '/images',
      '/users',
      '/collaborators'
    ]

    for (const wlUrl of whitelist) if (url.startsWith(wlUrl)) return false

    return true
  }

}