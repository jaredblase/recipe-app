import { Config } from 'drizzle-kit'
import 'dotenv-flow/config'

export default {
	schema: './src/db/*',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		host: process.env.DB_HOST ?? 'localhost',
		port: parseInt(process.env.DB_PORT ?? '3306'),
		database: process.env.DB_DATABASE ?? 'db',
	},
} satisfies Config
