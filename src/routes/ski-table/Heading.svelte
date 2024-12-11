<script lang="ts">
	import CountryFilter from './CountryFilter.svelte';
	import { createEventDispatcher } from 'svelte';
	export let data;
	export let running: boolean;
	export let pause: boolean;
	export let timeElapsed: number;
	export let framesTo100: number;
	export let sortKey: string;
	export let progress: number;
	export let selectedCountries: string[];

	const sortKeys = ['rank', 'country', 'shirtNumber', 'name', 'lastName'];
	const dispatch = createEventDispatcher();

	const start = () => dispatch('start');
	const startOrPause = () => dispatch('toggle');
	const restart = () => dispatch('replay');
</script>

<div class="header">
	<h1>
		{data.season}
		{data.competitionName}
		{data.name}
		({data.date})
	</h1>
</div>
<div class="controls">
	<div>
		<label for="sort"
			>Sort by:
			<select bind:value={sortKey} id="sort">
				{#each sortKeys as sorter}
					<option value={sorter}>{sorter}</option>
				{/each}
			</select></label
		>
	</div>
</div>
<CountryFilter bind:selectedCountries />
<div class="player-controls">
	<input type="range" class="scrubber" bind:value={progress} min="0" max={framesTo100} />

	<div class="playbutton">
		{#if running === false && timeElapsed < framesTo100}
			<button on:click={start}>Play</button>
		{:else if timeElapsed < framesTo100}
			<button on:click={startOrPause}>
				{#if pause}
					Continue
				{:else}
					Pause
				{/if}
			</button>
		{:else}
			<button on:click={restart}>Replay</button>
		{/if}
	</div>
</div>

<style>
	.controls {
		width: 100%;
	}
	.player-controls {
		display: flex;
		justify-content: space-between;
		margin-block: 1rem;
		width: 100%;
	}
	.scrubber {
		width: 90%;
	}
</style>
