import { db } from '$lib/server/db'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const id = parseInt(params.id)

	if (isNaN(id)) throw error(404, 'Recipe not found!')

	const recipe = await db.query.recipes.findFirst({
		where: (recipes, { eq }) => eq(recipes.id, id),
		with: {
			steps: {
				columns: {
					id: false
				},
				with: {
					stepIngrdients: {
						columns: {
							ingredientId: false,
							stepId: false,
						},
						with: {
							ingredients: {
								columns: {
									name: true
								}
							}
						}
					}
				}
			}
		}
	})

	if (!recipe) throw error(404, 'Recipe not found')

	return {
		recipe,
	}
}
