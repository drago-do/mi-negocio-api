const express = require("express");
const app = express();
const morgan = require("morgan");
const dateTimeReq = require("./middleware/dateTimeReq");
require("dotenv").config();

const port = process.env.PORT || 3001;

//Configuraciones
app.set("port", port);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Conexión mongoDB
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, () => console.log("Conectado a base"))
  .catch((e) => console.log(e));

//Routes
app.use(dateTimeReq);

//Entrada General a la api
app.use(require("./routes/index"));

//Para las rutas
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/category", require("./routes/category"));

//Para ventas comandas etc
app.use("/order", require("./routes/order"));
app.use("/daySales", require("./routes/daySales"));

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
