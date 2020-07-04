import * as repo from './repo';

export async function index(req, res) {
  const favs = await repo.find();
  return res.json(favs);
}

export async function store(req, res) {
  const { author, post } = req.body;
  const fav = await repo.save({ author, post });
  return res.json(fav);
}

export async function remove(req, res) {
  const { id } = req.params;
  const data = await repo.remove(id);
  return res.json(data);
}
