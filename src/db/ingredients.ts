import { relations } from 'drizzle-orm'
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { stepIngredient } from './step_ingredient'

export const ingredients = mysqlTable('ingredients', {
	id: int('id').primaryKey().autoincrement().notNull(),
	name: varchar('name', { length: 256 }).notNull().unique(),
	type: varchar('type', { length: 100 }).notNull(),
})

export const ingredientRelations = relations(ingredients, ({ many }) => ({
	stepIngredient: many(stepIngredient),
}))
