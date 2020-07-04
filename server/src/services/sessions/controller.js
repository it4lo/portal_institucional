import jwt from 'jsonwebtoken';
import { configAuth } from '@config'
import { User } from '@models';
import bcrypt from 'bcryptjs';

export async function store(req, res) {

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ err: 'User not found' })
  }
   
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ err: 'Password does not match' })
  } 

  const { id, name } = user;

  return res.json(
    {
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, configAuth.secret, {
        expiresIn: configAuth.expiresIn,
      })
    });
} 