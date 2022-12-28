const { Router } = require("express");
const router = Router();
//Requerir el Schema para CRUD usuario
const userSchema = require("./../models/user");

//Create User
router.post("/", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all users
router.get("/", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one user by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update user by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, username, password, role, avatar, age } =
    req.body;
  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          firstName,
          lastName,
          email,
          username,
          password,
          role,
          avatar,
          age,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete user by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
