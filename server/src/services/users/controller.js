import * as repo from './repo';


export async function index(req, res) {
  const users = await repo.find();
  return res.json(users);
}

export async function store(req, res) {
  const { name, email, password } = req.body;
  const reponse = await repo.save({ name, email, password })
  return res.json(reponse);
}



