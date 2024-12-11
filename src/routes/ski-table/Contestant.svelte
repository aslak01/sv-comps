<script lang="ts">
	import { onMount } from 'svelte';
	import { clamp, dsToHumandate } from './utils/';
	import { onhover } from './utils/events';
	export let contestant;
	export let progress: number;
	export let framesTo100: number;
	export let slowestTime: number;

	const times = contestant.times ? contestant.times : [0];
	const maxTime = times[times?.length - 1];
	const speedFactor = maxTime / slowestTime;
	const localFrameCount = framesTo100 * speedFactor;

	$: raceProgress = (progress / localFrameCount) * 100;
	$: progressed = contestant.rank && !isNaN(raceProgress) ? clamp(raceProgress, 0, 100) : 0;
	$: finished = progressed === 100 ? true : false;

	// $: if (
	//   contestant.uuid === '89967c80-6a47-4b13-887b-9f39871954f8' ||
	//   contestant.uuid === 'a7797838-6fc5-4615-9143-67bc3c646dc3'
	// ) {
	//   console.log(contestant.times)
	//   console.log('slowestTime', slowestTime)
	//   console.log('localFrameCount', localFrameCount)
	//   console.log('finished', finished)
	//   console.log('speedFactor', speedFactor)
	//   // console.log('progress', progress)
	//   // console.log('percentDone', percentDone)
	// }
	let mounted = false;
	let hover = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div
		class="contestant"
		class:hover
		style="--progress: {progressed}%"
		use:onhover={() => (hover = !hover)}
	>
		{#if finished}
			<div class="time">{dsToHumandate(maxTime)}</div>
			<div
				class="number"
				class:gold={contestant.rank === 1}
				class:silver={contestant.rank === 2}
				class:bronze={contestant.rank === 3}
			>
				{contestant.rank}
			</div>
		{/if}
		<div class="flag">
			<slot />
		</div>
		<div class="name">
			{contestant.shirtNumber}
			{contestant.name}
		</div>
		<div class="track"></div>
	</div>
{/if}

<style>
	:root {
		--line-height: 15px;
	}
	.hover {
		cursor: pointer;
	}
	.contestant {
		display: flex;
		position: relative;
		flex-direction: row-reverse;
		align-items: center;
		width: var(--progress);
		height: var(--line-height);
		font-size: 8pt;
		line-height: var(--line-height);
	}
	.number {
		display: flex;
		position: absolute;
		right: -20px;
		justify-content: center;
		align-items: center;
		border-radius: 999px;
		background: var(--indigo-1);
		width: var(--line-height);
		height: var(--line-height);
		color: white;
		font-size: 7pt;
	}
	.number.gold {
		background: gold;
		color: black;
	}
	.number.silver {
		background: silver;
		color: black;
	}
	.number.bronze {
		background: #cd7f32;
		color: black;
	}
	.time {
		position: absolute;
		right: -80px;
	}
	.track {
		border-block: 1px solid #ffffff80;
		width: 100%;
		height: 40%;
	}
	.hover .track {
		border-color: var(--indigo-3);
	}
	.hover .number {
		transform: scale(2);
		z-index: 100;
		transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
		font-weight: bold;
	}
	.name {
		padding-right: 5px;
		padding-left: 5px;
		color: white;
		white-space: nowrap;
	}
	.flag {
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		width: var(--line-height);
		height: var(--line-height);
	}
	.hover .name {
		font-weight: bold;
	}
</style>
