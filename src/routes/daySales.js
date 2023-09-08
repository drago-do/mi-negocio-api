const { Router } = require("express");
const router = Router();

//Requerir el Schema para CRUD usuario
const daySalesSchema = require("../models/daySales");
const orderSchema = require("../models/order");

//Create daySale
router.post("/", (req, res) => {
  const daySalesObject = daySalesSchema(req.body);
  console.log(daySalesObject);
  console.log("daysales");
  daySalesObject
    .save()
    .then((data) => {
      console.log("insert");
      //Borrar base de datos order
      orderSchema.deleteMany({}, (err) => {
        if (err) {
          console.error("Error al eliminar documentos:", err);
        } else {
          console.log("Se eliminaron todos los documentos de la colección.");
          res.send(data);
        }
      });
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
      res.json({ message: error });
    });
});

//Get all daySale's
router.get("/", (req, res) => {
  daySalesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one daySale by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  daySalesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
