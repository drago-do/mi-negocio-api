const { Router } = require("express");
const router = Router();

const { DaySales } = require("./../../models/sales");

//Create DaySales
router.post("/", (req, res) => {
  console.log("hola");
  const daySales = DaySales(req.body);
  daySales
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all DaySales
router.get("/", (req, res) => {
  DaySales.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one DaySale by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  DaySales.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update DaySale by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { date, dayName, sales } = req.body;
  DaySales.updateOne(
    { _id: id },
    {
      $set: {
        date,
        dayName,
        sales,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete DaySale by id
router.delete("1/:id", (req, res) => {
  const { id } = req.params;
  DaySales.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
