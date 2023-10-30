import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from '../../db'
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } from '$env/static/private'

const poolConnection = mysql.createPool({
	host: DB_HOST,
	port: parseInt(DB_PORT),
	user: DB_USER,
	password: DB_PASS,
	database: DB_DATABASE,
	multipleStatements: true,
})

export const db = drizzle(poolConnection, { schema, mode: 'default' })
