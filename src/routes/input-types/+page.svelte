<script lang="ts">
	const inputModes = ['none', 'numeric', 'tel', 'decimal', 'email', 'url', 'search'] as const;
	const inputTypes = ['text', 'number', 'tel', 'email'];
</script>

<div class="wrapper">
	<h1>Html input <code>types</code> & <code>inputmode</code> combinations</h1>
	{#each inputTypes as type}
		<h2>input <code>type={type}</code></h2>
		<div class="inputs">
			{#each inputModes as inputmode}
				<label for={type + inputmode}
					>type <code>{type}</code>, inputmode <code>{inputmode}</code>
				</label>
				<input {type} {inputmode} id={type + inputmode} />
			{/each}
		</div>
	{/each}
</div>

<style>
	:global(body) {
		margin: 0;
	}
	h1 {
		margin-top: 0;
	}
	.wrapper {
		--black: #222;
		--white: #eee;
		color-scheme: light dark;
		background: light-dark(var(--white), var(--black));
		color: light-dark(var(--black), var(--white));
		font-family: Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow',
			sans-serif-condensed, sans-serif;
		padding: 1rem;
	}
	.inputs {
		display: grid;
		grid-template-columns: 15% 50%;
		gap: 3rem;
		margin-bottom: 4rem;
	}
	input {
		height: 1lh;
		font-size: 1.5rem;
	}
	code {
		font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas,
			'DejaVu Sans Mono', monospace;
		font-weight: bold;
	}
</style>
