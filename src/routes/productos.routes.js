import { Router } from "express";

import { getProductos, getProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/productos', getProductos)

router.get('/productos/:id', getProducto)

export default router