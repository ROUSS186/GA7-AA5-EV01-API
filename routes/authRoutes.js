const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// Ruta para registrar
router.post("/registro", authController.registrar);

// Ruta para iniciar sesión
router.post("/login", authController.login);

module.exports = router;