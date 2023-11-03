
import { Router } from 'express'
import { sessionValidation } from '../middlewares/cuenta.mw.js'
import { loginController, registerController } from '../controllers/cuenta.controllers.js'

const router = Router()

router.post('/login', loginController)
router.post('/register', registerController)

router.get("/cerrar-sesion", sessionValidation)
router.get("/validar-sesion")

export default router