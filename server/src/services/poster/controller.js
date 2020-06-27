import * as repo from './repo';

export async function index(req, res) {
  const posts = await repo.index();
  return res.json(posts);
}

export async function store(req, res) {
  const {
    title,
    body,
    detail,
    displayName,
    userId
  } = req.body;

  const post = await repo.store({
    title,
    body,
    detail,
    displayName,
    userId,
    photoURL: req.file.filename
  });

  return res.json(post);
}

