import * as repo from './repo';

export async function index(req, res) {
  const comments = await repo.find();
  return res.json(comments);
}

export async function store(req, res) {
  const { body, author, post } = req.body;
  const comment = await repo.save({ body, author, post });
  return res.json(comment);
}

export async function remove(req, res) {
  const { id } = req.params;
  const data = await repo.remove(id);
  return res.json(data);
}
