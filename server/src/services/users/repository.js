import { User } from '@models';
import bcrypt from 'bcryptjs';

export async function createUser({ name, email, password }) {
  const user = await new User({
    name,
    email,
    password: await bcrypt.hash(password, 8)
  }).save();
  return user;
}