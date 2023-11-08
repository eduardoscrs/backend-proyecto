
import { pool } from "../config/bd.js"
import { JWT_SECRET } from "../config/config.js"
import { verifyToken } from "../utils/jwt.utils.js"
import { tokensInvalidos } from "../utils/tokens.utils.js"

export const sessionValidation = async (req, res, next) => {

    try {
        // Formato del token : Bearer <token>
        const token = req.headers.authorization.split(" ")[1]
        const payload = verifyToken(token, JWT_SECRET)

        if (tokensInvalidos.includes(token)) {
            throw { status: 401, message: "No Autorizado" }
        }

        req.payload = payload
        req.token = token
        next()

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}

export const roleValidation = (roles) => async (req, res, next) => {

    try {

        const { uid } = req.payload

        const query = `
            SELECT * FROM usuarios
            WHERE id = $1
        `

        const result = await pool.query(query, [uid])

        if (result.rows.length === 0) {
            throw { status: 404, message: "User not found" }
        }

        const user = result.rows[0]

        if (!roles.includes(user.rol)) {
            throw { status: 401, message: "Unauthorized" }
        }

        next()

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}