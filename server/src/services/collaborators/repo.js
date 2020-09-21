import { Coll } from '@models'

export async function find() {
  const colls = await Coll.find().lean();
  const response = colls.map(coll => {
    return { ...coll, photoURL: `http://localhost:3333/images/${coll.photoURL}` };
  });
  return response;
}

export async function save(coll) {
  const collaborator = await new Coll(coll).save();
  return collaborator;
}

export async function update(id, coll) {
  const collaborator = await Coll.findByIdAndUpdate(id, coll, { new: true });
  return collaborator;
}
