<script>
	export let data
</script>

<section class="mt-4">
	<search class="container">
		<form class="mb-4" data-sveltekit-keepfocus>
			<label for="q">Search recipes</label>
			<input type="search" name="q" id="q"/>
		</form>
		{#each data.recipes as recipe (recipe.id)}
			<div>
				<a href={`/recipes/${recipe.id}`}>
					{recipe.name}
				</a>
			</div>
		{/each}
	</search>
</section>
