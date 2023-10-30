import { index, int, mysqlTable, text, tinyint, unique } from 'drizzle-orm/mysql-core'
import { recipes } from './recipes'
import { relations } from 'drizzle-orm'
import { stepIngredient } from './step_ingredient'

export const steps = mysqlTable(
	'steps',
	{
		id: int('id').primaryKey().autoincrement().notNull(),
		recipeId: int('recipe_id')
			.notNull()
			.references(() => recipes.id),
		stepNo: tinyint('step_no').notNull(),
		description: text('description').notNull(),
	},
	steps => ({
		recipeId: index('recipe_id_idx').on(steps.recipeId),
		uniqueRecipeStep: unique().on(steps.recipeId, steps.stepNo),
	})
)

export const stepRelations = relations(steps, ({ one, many }) => ({
	recipe: one(recipes, {
		fields: [steps.recipeId],
		references: [recipes.id],
	}),
	stepIngrdients: many(stepIngredient),
}))
