// Importar Express
const express = require("express");

// Crear la aplicación
const app = express();

// Puerto donde se ejecutará el servidor
const PORT = 3000;

// Permitir recibir datos en formato JSON
app.use(express.json());

// Importar las rutas
const authRoutes = require("./routes/authRoutes");

// Usar las rutas
app.use("/api", authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});