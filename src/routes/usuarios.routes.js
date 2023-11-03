
import { Router } from "express";

import { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/usuarios', getUsuarios)
//const sql = 'SELECT * FROM usuarios'

router.get('/usuarios/:id', getUsuario)

router.post('/usuarios', createUsuarios)
//const sql = 'INSERT INTO usuarios SET ?'

router.put('/usuarios/:id', updateUsuarios)
//const sql = 'UPDATE usuarios SET ? WHERE id = ?'

router.delete('/usuarios/:id', deleteUsuarios)
//const sql = 'DELETE FROM usuarios WHERE id = ?'

export default router