import dotenv from 'dotenv'
dotenv.config()

export const TZ = process.env.TZ || 'Etc/GMT0'
export const DATABASE_PORT = process.env.DATABASE_PORT || 3306
export const DATABASE_DIALECT = process.env.DATABASE_DIALECT || 'mariadb'
export const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'
export const DATABASE_NAME = process.env.DATABASE_NAME || 'rsstodolist'
export const DATABASE_USER = process.env.DATABASE_USER || 'rsstodolist'
export const DATABASE_PASS = process.env.DATABASE_PASS 
export const PORT = process.env.PORT || 6070
export const CONTAINER_EXT_PORT = process.env.CONTAINER_EXT_PORT
export const PUBLIC = process.env.PUBLIC
export const ROOT_URL = process.env.ROOT_URL

export const DB_URL =
    process.env.DB_URL ||
    `${DATABASE_DIALECT}://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`
