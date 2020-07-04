import * as repo from './repo';

export async function index(req, res) {
  const managements = await repo.find();
  return res.json(managements);
}

export async function store(req, res) {
  const {
    name,
    hierarchy
  } = req.body;

  const management = await repo.save({
    name,
    hierarchy
  })

  return res.json(management);
}

