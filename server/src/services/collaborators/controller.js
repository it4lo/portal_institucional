import * as repo from './repo';

export async function index(req, res) {
  const colls = await repo.find();
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
    management,
    facebook,
    linkedin,
    instagram,
    twitter,
    photoURL
  } = req.body;


  const coll = await repo.save({
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
    management,
    facebook,
    linkedin,
    instagram,
    twitter, photoURL: req.file ? req.file.filename : photoURL
  })

  return res.json(coll);
}


export async function update(req, res) {

  const { id } = req.params;

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
    management,
    facebook,
    linkedin,
    instagram,
    twitter,
    photoURL
  } = req.body;


  const coll = await repo.update(id, {
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
    management,
    facebook,
    linkedin,
    instagram,
    twitter, photoURL: req.file ? req.file.filename : photoURL
  })

  return res.json(coll);
}

