import jwt from 'jsonwebtoken';
import { configAuth } from '@config'
import { User } from '@models';
import bcrypt from 'bcryptjs';

export async function store(req, res) {

  const { email, password } = req.body;
  const user = await User.findOne({ email })
    .populate('collaborator', 'photoURL');

  if (!user) {
    return res.status(401).json({ err: 'User not found' })
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ err: 'Password does not match' })
  }

  user.password = undefined;

  return res.json(
    {
      user,
      token: jwt.sign({ id: user._id }, configAuth.secret, {
        expiresIn: configAuth.expiresIn,
      })
    });
} 

export async function testIndex(req, res){
  return res.json({test: 'Test ok'});
}