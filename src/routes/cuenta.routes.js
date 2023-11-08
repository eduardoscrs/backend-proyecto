
import { Router } from 'express'
import { sessionValidation } from '../middlewares/cuenta.mw.js'
import { loginController, logoutController, registerController } from '../controllers/cuenta.controllers.js'

const router = Router()

router.post('/iniciarSesion', loginController)
router.post('/registrar', registerController)

router.get("/cerrarSesion", sessionValidation, logoutController)
// router.get("/validarSesion")

export default router