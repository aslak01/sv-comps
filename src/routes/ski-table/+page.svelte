<script lang="ts">
	import { onMount } from 'svelte';
	import { deserializeData, clamp, dsToHumandate, type Contestant } from './utils';
	// import { flags } from './flags';
	import ContestantComp from './Contestant.svelte';
	import Heading from './Heading.svelte';

	import { type Race } from './race-types';
	import data from './race.json';
	// casting this because importing the json is not being interpreted as "string"
	// due to some quirk of the way json imports works in this project
	const raceData: Race = data as unknown as Race;

	let startTime: number | undefined;
	let timeElapsed = 0;
	let pauseTime = 0;
	let pause = false;
	let running = false;
	let progress = 0;
	let framesTo100 = 10000;

	const deserializedData = deserializeData(raceData.locations);
	const slowestTime = deserializedData.slowestTime;

	const raceTimeFactor = slowestTime / framesTo100;

	const startOrPause = () => {
		running = !running;
		pause = !pause;
	};

	const startRace = () => {
		running = true;
		requestAnimationFrame(loop);
	};

	const restart = () => {
		timeElapsed = 0;
		startTime;
		pauseTime = 0;
		running = true;
		pause = false;
		requestAnimationFrame(loop);
	};

	$: progress = Math.floor(clamp(timeElapsed, 0, framesTo100));
	$: humanDuration = dsToHumandate(progress * raceTimeFactor);

	function loop(timeStamp: number) {
		if (!startTime) {
			startTime = timeStamp;
		}
		if (running && pause === false) {
			timeElapsed = timeStamp - startTime - pauseTime;
			requestAnimationFrame(loop);
		} else if (running && pause) {
			pauseTime = timeStamp - startTime - timeElapsed;
			timeElapsed = timeStamp - startTime - pauseTime;
			pause = false;
			requestAnimationFrame(loop);
		}
	}
	const countries = deserializedData.countries;
	let selectedCountries: string[] = countries;

	let sortKey: keyof Contestant = 'rank';

	$: contestants = deserializedData.contestants
		.filter((c) => selectedCountries.indexOf(c.country) >= 0)
		.sort((a, b) => {
			const one = a[sortKey];
			const two = b[sortKey];
			if (typeof one === 'undefined' || typeof two === 'undefined') return 0;
			if (one > two) return 1;
			if (one < two) return -1;
			return 0;
		});

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<Heading
	data={data.racedata}
	{running}
	{timeElapsed}
	{framesTo100}
	{pause}
	on:toggle={startOrPause}
	on:start={startRace}
	on:replay={restart}
	bind:sortKey
	bind:progress
	bind:selectedCountries
/>
{#if mounted}
	<div class="wrapper" style="--heightFactor: {contestants.length}">
		<div class="time">Time: {humanDuration}</div>
		<div class="indicator-labels">
			<div class="label"><span>START</span></div>
			<div class="label"><span>1,1 km</span></div>
			<div class="label"><span>3,1 km</span></div>
			<div class="label"><span>5,0 km</span></div>
			<div class="label"><span>6,1 km</span></div>
			<div class="label">
				<span>8,1 km</span>
				<span>FINISH</span>
			</div>
		</div>
		<div class="indicators">
			<div class="check"></div>
			<div class="check"></div>
			<div class="check"></div>
			<div class="check"></div>
			<div class="check"></div>
			<div class="check"></div>
		</div>

		<div class="piste">
			{#each contestants as contestant (contestant.uuid)}
				{@const flagKey = contestant.country}
				<ContestantComp {contestant} {framesTo100} {progress} {slowestTime}>
					<!-- <svelte:component this={flags[flagKey]} /> -->
				</ContestantComp>
			{/each}
		</div>
	</div>
{/if}

<style>
	.wrapper {
		display: grid;
		grid-template-rows: 15px 15px 100%;
		grid-template-columns: 15% 75% 10%;
		background: black;
		padding-top: 10px;
		width: 100%;
		height: calc(calc(var(--heightFactor) * 15.5px) + 35px);
		overflow: hidden;
	}
	.time {
		margin-left: 10px;
		padding: 5px;
		font-size: 12pt;
		white-space: nowrap;
	}
	.piste {
		grid-area: 3 / 2 / 3 / 2;
		z-index: 2;
	}
	.indicator-labels {
		display: grid;
		position: relative;
		grid-template-columns: 11% 20% 19% 11% 20% 19%;
		grid-area: 1 / 2 / 1 / 2;
		z-index: 1;
		height: 100%;
		color: white;
		font-size: 8pt;
		text-align: left;
	}
	.indicator-labels .label {
		position: relative;
	}
	.indicator-labels .label span:first-of-type {
		position: absolute;
		left: -15px;
	}
	.indicator-labels .label span:last-of-type {
		position: absolute;
		right: -18px;
	}
	.indicators {
		display: grid;
		grid-template-columns: 11% 20% 19% 11% 20% 19%;
		grid-area: 2 / 2 / 4 / 2;
		z-index: 1;
		height: 100%;
	}
	.check {
		opacity: 0.5;
		border-right: 1px dotted white;
		height: 100%;
	}
	.check:first-of-type {
		border-left: 1px dashed white;
	}
	.check:last-of-type {
		border-right: 1px dashed white;
	}
</style>
