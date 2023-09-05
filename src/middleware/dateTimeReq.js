const { Router } = require("express");
const router = Router();

// Middleware personalizado para configurar las cabeceras de caché
const dateTimeReq = (req, res, next) => {
  console.log("Hora de la solicitud: " + getHour());
  next();
};

//Función recibe timestamp y regresa la hora con minutos y segundos
function getHour() {
  let timestamp = Date.now();
  let date = new Date(timestamp);
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
}
module.exports = dateTimeReq;
