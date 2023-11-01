<script>
	export let data

	const { recipe } = data
</script>

<section class="container mt-4">
	<h1 class="text-3xl font-bold">{recipe.name}</h1>
	{#if recipe.link}
		<a href={recipe.link}>source: {recipe.source ?? recipe.link}</a>
	{:else if recipe.source}
		<p>source: {recipe.source}</p>
	{/if}

	<table class="border-spacing-4 border-separate">
		<thead>
			<tr>
				<th>Step No.</th>
				<th>Ingredients</th>
				<th>Directions</th>
			</tr>
		</thead>
		<tbody>
			{#each recipe.steps as step (step.stepNo)}
				<tr>
					<td class="text-center">{step.stepNo}</td>
					<td class="text-left">
						{#each step.stepIngrdients as stepIng (stepIng.id)}
							<p>
								{#if stepIng.numerator} {stepIng.numerator} {/if}
								{#if stepIng.unit} {stepIng.unit} {/if}
								{#if stepIng.denominator && stepIng.denominator !== 1} /{stepIng.denominator} {/if}
								{stepIng.ingredients.name}
								{#if stepIng.remarks} {stepIng.remarks} {/if}
							</p>
						{/each}
					</td>
					<td>{step.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style lang="postcss" scoped>
	tr {
		@apply border-gray-800 border border-solid;
	}

	td {
		@apply py-1
	}
</style>