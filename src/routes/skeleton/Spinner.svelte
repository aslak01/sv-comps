<script lang="ts">
	export let color = '#ddd';
	export let duration = '5s';
</script>

<div class="animating" style="--_anim-color: {color}; --_anim-dur: {duration}">
	<div class="wheel"></div>
</div>

<style>
	.animating {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.wheel {
		position: relative;
		height: 50px;
		width: 50px;
		animation: spin var(--_anim-dur) ease-out infinite;
		border: 5px solid #ddd;
		border-bottom-color: transparent;
		border-top-color: transparent;
		border-radius: 50%;
	}

	.wheel::before {
		content: '';
		position: absolute;
		top: -5px;
		left: -5px;
		width: 100%;
		height: 100%;
		border: 5px solid var(--_anim-color);
		border-top-color: transparent;
		border-radius: inherit;
		animation: spin 7s linear infinite;
	}
	.linear {
		animation: move var(--_anim-dur) cubic-bezier(0.5, 0.75, 0.75, 1.25) infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes move {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(3);
		}
		50% {
			transform: scale(2) translateX(100%);
		}
		75% {
			transform: scale(2);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
