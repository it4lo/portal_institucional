import * as repo from './repo';

export async function index(req, res) {
  const colls = await repo.index();
  return res.json(colls);
}

export async function store(req, res) {
  const {
    socialName,
    fullName,
    day,
    month,
    dateOfAdministration,
    dateOfBirth,
    occupation,
    email,
    aboutMe,
    gender,
    magement
  } = req.body;

  const coll = await repo.store({
    socialName, fullName, day, month, dateOfAdministration,
    dateOfBirth, occupation, email, aboutMe, gender, photoURL: req.file.filename
  })

  return res.json(coll);
}
