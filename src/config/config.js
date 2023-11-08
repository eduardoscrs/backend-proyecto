import 'dotenv/config'

export const PORT = process.env.PORT || 3000
export const JWT_SECRET = process.env.JWT_SECRET || "perfumeria_secret"
export const DB_HOST = process.env.MODE === "PRODUCCION" ? process.env.DB_HOST : "localhost"
export const DB_USER = process.env.MODE === "PRODUCCION" ? process.env.DB_USER : "root"
export const DB_PASSWORD = process.env.MODE === "PRODUCCION" ? process.env.DB_PASSWORD : ""
export const DB_URL = process.env.MODE === "PRODUCCION" ? process.env.DB_URL : "localhost"
export const DB_PORT = process.env.MODE === "PRODUCCION" ? process.env.DB_PORT : 3306
export const DB_DATABASE = process.env.MODE === "PRODUCCION" ? process.env.DB_DATABASE : "joyeria"
export const DB_CONNECT_TIMEOUT = 100000
