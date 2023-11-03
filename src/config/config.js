
import { config } from "dotenv";

export const JWT_SECRET = process.env.JWT_SECRET || "perfumeria_secret"
export const PORT = process.env.PORT || 3000
export const DB_URL = process.env.DB_URL || "localhost"