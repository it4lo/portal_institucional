import { Management } from '@models'

export async function find() {
  const managements = await Management.find().lean();
  return managements;
}

export async function save(data) {
  const management = await new Management(data).save();
  return management;
}

export async function update(id, data) {
  const management = await Management.findByIdAndUpdate(id, data, { new: true });
  return management;
}







