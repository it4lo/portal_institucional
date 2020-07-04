import { Position } from '@models'

export async function find() {
  const positions = await Position.find().lean();
  return positions;
}

export async function save(data) {
  const position = await new Position(data).save();
  return position;
}

export async function update(id, data) {
  const position = await Position.findByIdAndUpdate(id, data, { new: true });
  return position;
}







