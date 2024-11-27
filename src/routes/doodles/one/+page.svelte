<script lang="ts">
	import Control from './Control.svelte';
	let lines = 4;
	let displacement = 2;
	let thickness = 12;
	let spacing = 10;
	$: frequency = thickness + spacing;
	const fillArr = (n: number) => Array(n).fill('');
	$: arr = fillArr(lines);
	let angle = 44;
	const height = 100;
	const width = 250;
	let highlight = 1;
</script>

<div class="controls">
	<Control bind:value={lines} min={1} step={1} label="lines" />
	<Control bind:value={thickness} max={30} label="thickness" />
	<Control bind:value={spacing} label="spacing" />
	<Control bind:value={angle} min={-1000} max={1000} label="angle" />
	<Control bind:value={displacement} min={-10} max={10} step={1} label="displacement" />
	<Control bind:value={highlight} min={-1} max={arr.length} label="highlight" step={1} />
</div>

<div class="wrapper" style="--height: {height}px; --width: {width}px">
	<svg viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
		{#each arr as _, i}
			{@const start = Math.round((i + displacement) * frequency + thickness - angle)}
			{@const end = Math.round((i + displacement) * frequency + angle)}
			<path
				d="M{start},{angle * -1} {end},{height + angle}"
				stroke={i === highlight ? '#d60000' : '#eeeeee'}
				stroke-width={thickness}
				fill="none"
			/>
		{/each}
	</svg>
</div>

<style>
	.wrapper {
		height: 100vmin;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: lightskyblue;
	}
	svg {
		height: var(--height);
		width: var(--width);
	}
</style>
