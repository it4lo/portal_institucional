import * as repository from './repository';


export async function index(req, res) {
  res.json({ message: 'List of users' });
}

export async function store(req, res) {
  const { name, email, password } = req.body;
  const user = await repository.createUser({ name, email, password })
  res.json(user);
}

