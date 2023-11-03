
import { pool } from '../config/bd.js'
import { newToken } from '../utils/jwt.utils.js'
import { tokensInvalidos } from '../utils/tokens.utils.js'
import { hashPassword, comparePassword } from '../utils/bcrypt.utils.js'

export const loginController = async (req, res) => {

    try {

        const { email, contraseña } = req.body

        const query = `
            SELECT * FROM usuario
            WHERE Correo = ? AND contraseña = ?
        `

        const [ rows ]= await pool.query(query, [email, contraseña])

        console.log(rows)

        if (rows.length === 0) {
            throw { status: 404, message: "User not found" }
        }

        const user = rows[0]
        const isValidPassword = await comparePassword(password, user.contraseña)

        if (!isValidPassword) {
            throw { status: 401, message: "Invalid credentials" }
        }

        const payload = {
            uid: user.id,
        }

        const token = newToken(payload)
        res.status(200).json({ message: "Te haz logueado correctamente", token })

    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

export const registerController = async (req, res) => {

    try {
        const { nombre, email, usuario, contraseña} = req.body

        let query = `
            SELECT * FROM Usuario
            WHERE Nombre = ? OR Correo = ?
        `
        let [ rows ] = await pool.query(query, [nombre, email])

        if (rows.length > 0) {
            throw { status: 400, message: "Ya existe el usuario" }
        }

        query = `
            INSERT INTO usuario (nombre, correo, contraseña)
            VALUES (?, ?, ?)
        `

        const hashedPassword = await hashPassword(contraseña)
        console.log(hashedPassword)
        await pool.query(query, [nombre, email, hashedPassword])

        res.status(200).json({ message: "Usuario registrado correctamente" })

    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

export const logoutController = async (req, res) => {

    try {

        const { token } = req
        tokensInvalidos.push(token)

        res.status(200).json({ message: "User logged out successfully" })

    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

