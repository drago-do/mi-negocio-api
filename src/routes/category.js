const { Router } = require("express");
const router = Router();
//Requerir el Schema para CRUD usuario
const categorySchema = require("../models/category");

//Create category
router.post("/", (req, res) => {
  const category = categorySchema(req.body);
  category
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all category's
router.get("/", (req, res) => {
  categorySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one category by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  categorySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update category by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, image, subcategory } = req.body;
  categorySchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          description,
          image,
          subcategory,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete category by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  categorySchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
