<script>
	import '../app.css'
</script>

<svelte:head>
	<title>RecipeBook</title>
	<meta name="description" content="A simple recipe storage app" />
</svelte:head>
<header class="shadow-md fixed top-0 w-full bg-white">
	<nav class="container h-14 flex items-center justify-between">
		<a class="font-bold text-2xl" href="/">RecipeBook</a>
		<ul class="flex items-center gap-x-8">
			<li><a href="/recipes">Recipes</a></li>
			<li><a href="/plans">Plans</a></li>
		</ul>
	</nav>
</header>
<main class="pt-14">
	<slot />
</main>
