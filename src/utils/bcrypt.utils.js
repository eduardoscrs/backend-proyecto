
import bcrypt from 'bcryptjs'

export const hashPassword = async (password) => {

    try {

        return await bcrypt.hash(password, 8)

    } catch (error) {
        throw { status: 500, message: error.message }
    }
}

export const comparePassword = async (password, passwordHashed) => {

    try {

        return await bcrypt.compare(password, passwordHashed)

    } catch (error) {
        throw { status: 500, message: error.message }
    }
}