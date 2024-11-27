<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		--black: #222;
		--white: #eee;
		--accent: tomato;
		color-scheme: light dark;
		background: light-dark(var(--white), var(--black));
		color: light-dark(var(--black), var(--white));
		font-family: Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow',
			sans-serif-condensed, sans-serif;
	}
</style>
