import { relations } from 'drizzle-orm'
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { recipes } from './recipes'

export const methods = mysqlTable('methods', {
	id: int('id').primaryKey().autoincrement().notNull(),
	name: varchar('name', { length: 256 }).notNull().unique(),
})

export const methodRelations = relations(methods, ({ many }) => ({
	recipes: many(recipes),
}))
