import { User, Coll } from '@models';
import bcrypt from 'bcryptjs';


export async function find() {
  const users = await User.find().lean();
  return users;
}

export async function save({ name, email, password }) {

  try {
    
    const coll = await Coll.findOne({ email: email }, 'name');
    let user = await User.findOne({ email: email }, 'name');

    if (!coll) {
      throw { error: 'Colaborador não cadastrado, entre em contato com RH.', status: 400 }
    }

    if (user) {
      throw { error: 'Já existe um usuário com esse e-mail, entre em contato com RH.', status: 401 }
    }

    user = await new User({
      name,
      email,
      collaborator: coll._id,
      password: await bcrypt.hash(password, 8),
    }).save();

    return user;

  } catch (error) {
    return error;
  }
}

