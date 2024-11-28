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
				<div class="column-item" style="--background: {color.hex}; --text: {color.text}">
					<div>
						<TextJustifier bold><b>{color.name}</b></TextJustifier>
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
		font-weight: 800;
	}
	/* code { */
	/* 	margin-inline: 1em; */
	/* } */
	.column-item {
		aspect-ratio: 1.1;
		background-color: var(--background);
		color: var(--text);
		padding: 5%;
		align-content: center;
		font-size: 2rem;
		border-radius: 3px;
		overflow: hidden;
	}
	.column-item div {
		display: grid;
		gap: 5%;
		font-size: 5px;
	}
</style>
