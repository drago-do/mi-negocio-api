const { Router } = require("express");
const router = Router();

const { ItemOrder} = require("../../models/sales");

//Create ItemOrder
router.post("/itemorder", (req, res) => {
  const itemOrder = new ItemOrder(req.body);
  itemOrder
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all ItemOrders
router.get("/itemorder", (req, res) => {
  ItemOrder.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one ItemOrder by id
router.get("/itemorder/:id", (req, res) => {
  const { id } = req.params;
  ItemOrder.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update ItemOrder by id
router.put("/itemorder/:id", (req, res) => {
  const { id } = req.params;
  const { id_db, name, price, units } = req.body;
  ItemOrder.updateOne(
    { _id: id },
    {
      $set: {
        id_db,
        name,
        price,
        units,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete ItemOrder by id
router.delete("/itemorder/:id", (req, res) => {
  const { id } = req.params;
  ItemOrder.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;
