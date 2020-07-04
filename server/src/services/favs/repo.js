import { Fav } from '@models'

export async function find() {
  const data = await Fav.find()
    .populate('author', 'name email').lean();
  return data;
}

export async function save(fav) {
  const data = await new Fav(fav).save();
  return data;
}

export async function update(id, fav) {
  const data = await Fav.findByIdAndUpdate(id, fav, { new: true });
  return data;
}

export async function remove(_id) {
  const data = await Fav.findByIdAndRemove({ _id });
  return data;
}






