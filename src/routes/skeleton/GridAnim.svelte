<script lang="ts">
	import { faker } from '@faker-js/faker';
	const amt = faker.number.int({ min: 5, max: 15 });
	const evenAmt = amt * amt;
	const arr = Array(evenAmt).fill('');
	const roundedSqrt = (n: number): number => Math.ceil(Math.sqrt(n));
	const lineNr = (i: number, rowl: number): number => Math.floor(i / rowl) + 1;
</script>

<div class="anim-wrapper" style="--_box-len: {roundedSqrt(evenAmt)}">
	{#each arr as _, i}
		{@const line = lineNr(i, roundedSqrt(evenAmt))}
		<div class="anim-box" class:even={line % 2 === 0}></div>
	{/each}
</div>

<style>
	.anim-wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(var(--_box-len), 1fr);
		gap: 1px;
		overflow: hidden;
	}
	.anim-box {
		background: #b3b3b3;
		border: 1px solid white;
		animation: spin 20s ease-in-out 1s infinite alternate;
	}
	.anim-box.even {
		background: #f3f3f3;
		animation-duration: 20s;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg) scale(1);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
