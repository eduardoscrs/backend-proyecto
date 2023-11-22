import { Router } from "express";

import { getProductos, getProducto, createProducto, deleteProducto, updateProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/productos', getProductos)

router.get('/productos/:id', getProducto)

router.post('/agregarProducto', createProducto)

router.put('/actualizarCantidad', updateProducto)

router.delete('/eliminarProductos', deleteProducto)
export default router