const { Router } = require("express");
const router = Router();

// Middleware personalizado para configurar las cabeceras de caché
const setCacheHeaders = (req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=7200"); // Cache durante 2 hora
  next();
};

module.exports = setCacheHeaders;
