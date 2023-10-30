import { boolean, index, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'
import { methods } from './methods'
import { relations } from 'drizzle-orm'
import { recipeTags } from './recipe_tags'
import { steps } from './steps'

export const recipes = mysqlTable(
	'recipes',
	{
		id: int('id').primaryKey().autoincrement().notNull(),
		name: varchar('name', { length: 256 }).notNull(),
		source: varchar('source', { length: 256 }),
		link: text('link'),
		methodId: int('method_id').references(() => methods.id),
		isSaladmaster: boolean('is_saladmaster').notNull().default(false),
		remarks: text('remarks'),
	},
	recipes => ({
		nameIndex: index('recipe_name_idx').on(recipes.name),
	})
)

export const recipeRelations = relations(recipes, ({ one, many }) => ({
	method: one(methods, {
		fields: [recipes.methodId],
		references: [methods.id],
	}),
	recipeTags: many(recipeTags),
	steps: many(steps),
}))
