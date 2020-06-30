import { User } from '@models';
import bcrypt from 'bcryptjs';


export async function find(){
  const users = await User.find().lean();
  return users;
}

export async function save({ name, email, password }) {
  const user = await new User({
    name,
    email,
    password: await bcrypt.hash(password, 8)
  }).save();
  return user;
}

