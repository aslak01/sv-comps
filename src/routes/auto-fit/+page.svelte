<script lang="ts">
	import { faker } from '@faker-js/faker';
	const test = 'test';
	const make123 = () => faker.number.int({ min: 1, max: 3 });
	const makeColor = () => faker.color.rgb({ format: 'hex' });
</script>

<main>
	{#each Array.from({ length: 30 }) as _}
		<div class="row">
			{#each Array.from({ length: make123() }) as _}
				<div style="background: {makeColor()}; height: 300px; width: 100%;"></div>
			{/each}
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		gap: 10px;
		padding: 10px;
	}
	.row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 10px;
	}
</style>
