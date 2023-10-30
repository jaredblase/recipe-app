import { relations } from 'drizzle-orm'
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { recipeTags } from './recipe_tags'

export const tags = mysqlTable('tags', {
	id: int('id').primaryKey().autoincrement().notNull(),
	name: varchar('name', { length: 100 }).notNull().unique(),
})

export const tagRelations = relations(tags, ({ many }) => ({
	recipeTags: many(recipeTags),
}))
