import * as repo from './repo';

export async function index(req, res) {
  const positions = await repo.find();
  return res.json(positions);
}

export async function store(req, res) {
  const {
    name
  } = req.body;

  const position = await repo.save({ name });

  return res.json(position);

}
