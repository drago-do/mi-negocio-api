const { Router } = require("express");
const router = Router();
//Requerir el Schema para CRUD usuario
const productSchema = require("../models/product");

//Create product
router.post("/", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all products
router.get("/", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one product by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update product by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, ingredients, price, image, category } = req.body;
  productSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          description,
          ingredients,
          price,
          image,
          category,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete product by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
