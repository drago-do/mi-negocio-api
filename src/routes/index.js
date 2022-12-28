const { Router } = require("express");
const router = Router();

//Raiz
router.get("/", (req, res) => {
  res.json({ Hola: "soy la api" });
});

module.exports = router;
