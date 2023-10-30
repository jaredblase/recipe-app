import { relations } from 'drizzle-orm'
import { index, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'
import { ingredients } from './ingredients'
import { steps } from './steps'
import { recipes } from './recipes'

export const stepIngredient = mysqlTable(
	'step_ingredient',
	{
		id: int('id').primaryKey().autoincrement().notNull(),
		stepId: int('step_id')
			.references(() => steps.id)
			.notNull(),
		ingredientId: int('ingredient_id')
			.references(() => ingredients.id)
			.notNull(),
		numerator: int('numerator'),
		denominator: int('denominator'),
		unit: varchar('unit', { length: 50 }),
		remarks: text('remarks'),
	},
	stepIngredient => ({
		stepIndex: index('step_idx').on(stepIngredient.stepId),
	})
)

export const stepIngredientRelations = relations(stepIngredient, ({ one }) => ({
	ingredients: one(ingredients, {
		fields: [stepIngredient.ingredientId],
		references: [ingredients.id],
	}),
	step: one(steps, {
		fields: [stepIngredient.stepId],
		references: [steps.id],
	}),
}))
