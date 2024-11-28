<script>
	const routes = import.meta.glob('/src/routes/**/+page.svelte');

	const processedRoutes = Object.keys(routes)
		.map((route) => {
			const path = route.replace('/src/routes/', '').replace('/+page.svelte', '');
			if (path === '') return null;
			const name = path.split('/').join(' > ');
			return {
				path: `/${path}`,
				name
			};
		})
		.filter((route) => route !== null)
		.sort((a, b) => a.path.localeCompare(b.path));
</script>

<div class="wrapper">
	index:
	<ul>
		{#each processedRoutes as route}
			<li>
				<a href={route.path}>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		margin: 1rem;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 0.5lh;
	}
</style>
