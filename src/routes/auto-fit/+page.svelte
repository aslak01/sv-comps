<script lang="ts">
	import type { PageData } from './$types';
	import TextJustifier from '$lib/components/TextJustifier.svelte';

	let { data }: { data: PageData } = $props();
	const { divs } = data;
</script>

<main>
	{#each divs as row}
		<div class="row">
			{#each row as color}
				<div
					class="column-item {color.type} {color.shortName ? 'short' : ''}"
					style="--background: {color.hex}; --text: {color.text}"
				>
					<div>
						<TextJustifier><b>{color.name}</b></TextJustifier>
						<TextJustifier><code>{color.code}</code></TextJustifier>
						{#if color.rgb}
							<TextJustifier><code>{color.rgb}</code></TextJustifier>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		gap: 10px;
		padding: 10px;
		font-size: 6pt;
		word-spacing: normal;
		max-width: 980px;
	}
	.row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 10px;
	}
	b {
		font-family: Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
		font-weight: 900;
	}
	code {
		font-family: Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;
		font-variant-numeric: normal;
	}
	.column-item {
		aspect-ratio: 1.3;
		background-color: var(--background);
		color: var(--text);
		padding: 5%;
		border-radius: 3px;
	}
	.column-item div {
		display: grid;
		align-content: center;
		height: 100%;
		gap: 5%;
		font-size: 5px;
		overflow: hidden;
	}

	.column-item.short div {
		gap: 0;
	}

	.row:has(.column-item.big.right) {
		grid-template-columns: 1fr 2fr;

		.column-item:nth-child(1) {
			grid-column: 1;
			grid-row: 1 / 2;
		}
		.column-item:nth-child(2) {
			grid-column: 1;
			grid-row: 2 / 3;
		}
		.column-item:nth-child(3) {
			grid-column: 2;
			grid-row: 1 / 3;
			aspect-ratio: 1.25;
		}
	}

	.row:has(.column-item.big.left) {
		grid-template-columns: 2fr 1fr;

		.column-item:nth-child(1) {
			grid-column: 1;
			grid-row: 1 / 3;
			aspect-ratio: 1.25;
		}
		.column-item:nth-child(2) {
			grid-column: 2;
			grid-row: 1 / 2;
		}
		.column-item:nth-child(3) {
			grid-column: 2;
			grid-row: 2 / 3;
		}
	}
</style>
