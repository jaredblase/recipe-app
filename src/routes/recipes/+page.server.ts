import { db } from '$lib/server/db'

export async function load({ url }) {
	const query = url.searchParams.get('q') ?? ''
	
	const recipes = await db.query.recipes.findMany({
		where: (recipes, { like }) => like(recipes.name, `%${query}%`)
	})

	return {
		recipes,
	}
}
