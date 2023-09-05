const { Router } = require("express");
const router = Router();

const orderSchema = require("./../models/order");
const daySales = require("./../models/daySales");
//Create Order
router.post("/", (req, res) => {
  const order = orderSchema(req.body);
  //Verificar que no exista el id
  orderSchema.findOne({ id: order.id }).then((data) => {
    if (data) {
      //Remplazar el pedido con el mismo id por el nuevo
      orderSchema
        .updateOne(
          { id: order.id },
          {
            $set: {
              fullDeliver: order.fullDeliver,
              paid: order.paid,
              tableName: order.tableName,
              location: order.location,
              creationDate: order.creationDate,
              products: order.products,
              total: order.total,
            },
          }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    } else {
      order
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    }
  });
});

//Get all Orders
router.get("/", (req, res) => {
  console.log("Get all orders");
  orderSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get one Order by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  orderSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update Order by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { id_timestamp, name, items } = req.body;
  orderSchema
    .updateOne(
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
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  orderSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Mark order as complete
router.put("/complete/:id", (req, res) => {
  const { id } = req.params;
  orderSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          fullDeliver: true,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Make order as full pay
router.put("/pay/:id", (req, res) => {
  const { id } = req.params;
  orderSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          paid: "true",
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//End day sales
router.post("/endDay", (req, res) => {
  orderSchema
    .find()
    .then((order) => {
      console.log(order);
      const daySalesToday = new daySales({
        dateTime: new Date(),
        dayName: new Date().toLocaleDateString("es-ES", { weekday: "long" }),
        sales: order,
      });
      daySalesToday
        .save()
        .then((data) => {
          //borrar todas las comandas en "orders"
          orderSchema
            .remove()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
        })
        .catch((error) => res.json({ message: error }));
    })
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
