import * as repo from './repo';

export async function index(req, res) {
  const posts = await repo.find();
  return res.json(posts);
}

export async function store(req, res) {
  const {
    title,
    body,
    detail
  } = req.body;

  const post = await repo.save({
    title,
    body,
    detail,
    author: req.userId,
    photoURL: req.file.filename
  });

  return res.json(post);
}

