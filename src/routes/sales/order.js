const { Router } = require("express");
const router = Router();

const { Order } = require("../../models/sales");

//Create Order
router.post("/order", (req, res) => {
  const order = new Order(req.body);
  order
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all Orders
router.get("/order", (req, res) => {
  Order.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one Order by id
router.get("/order/:id", (req, res) => {
  const { id } = req.params;
  Order.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update Order by id
router.put("/order/:id", (req, res) => {
  const { id } = req.params;
  const { id_timestamp, name, items } = req.body;
  Order.updateOne(
    { _id: id },
    {
      $set: {
        id_timestamp,
        name,
        items,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete Order by id
router.delete("/order/:id", (req, res) => {
  const { id } = req.params;
  Order.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;