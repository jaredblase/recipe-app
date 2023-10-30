import { int, mysqlTable, unique } from 'drizzle-orm/mysql-core'
import { recipes } from './recipes'
import { tags } from './tags'
import { relations } from 'drizzle-orm'

export const recipeTags = mysqlTable(
	'recipe_tags',
	{
		id: int('id').primaryKey().autoincrement().notNull(),
		recipeId: int('recipe_id')
			.references(() => recipes.id)
			.notNull(),
		tagId: int('tag_id')
			.references(() => tags.id)
			.notNull(),
	},
	recipeTags => ({
		recipeTagIndex: unique().on(recipeTags.recipeId, recipeTags.tagId),
	})
)

export const recipeTagsRelations = relations(recipeTags, ({ one }) => ({
	recipe: one(recipes, {
		fields: [recipeTags.recipeId],
		references: [recipes.id],
	}),
	tag: one(tags, {
		fields: [recipeTags.tagId],
		references: [tags.id],
	}),
}))
