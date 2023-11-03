
import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '../config/config.js'

const { sign, verify } = jwt

export const newToken = (payload) => {

    try {
        return sign(payload, JWT_SECRET, { expiresIn: '1d' })

    } catch (error) {
        throw { status: 500, message: error.message }
    }
}

export const verifyToken = (token, secret) => {

    try {
        return verify(token, secret)

    } catch (error) {
        throw { status: 500, message: error.message }
    }
}