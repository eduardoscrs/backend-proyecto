
import bcrypt from 'bcryptjs'

const { hash, compare } = bcrypt

export const hashPassword = async (password) => {

    try {

        return await hash(password, 8)

    } catch (error) {
        throw { status: 500, message: error.message }
    }
}

export const comparePassword = async (password, passwordHashed) => {

    try {

        return await compare(password, passwordHashed)

    } catch (error) {
        throw { status: 500, message: error.message }
    }
}