import express from "express";
import cors from "cors";
import userRoutes from "./routes/usuarios.routes.js";
import rutasproducto from "./routes/productos.routes.js";

const PORT = process.env.PORT || 3000;

const app = express();

// Utilizar middleware de CORS
app.use(cors());

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', rutasproducto);

app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint not found" });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log("Server is running on http://localhost:${PORT}/api/usuarios");
});