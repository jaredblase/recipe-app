<script>
	import { page } from '$app/stores'
</script>

<section>
	<div class="container grid">
		<p>{$page.status}</p>
		<p>{$page.error?.message}</p>
		<a href="/recipes">Click here to go back to our recipes</a>
	</div>
</section>
