<script lang="ts">
	import Centerer from '$lib/components/Centerer.svelte';
</script>

<Centerer>
	<div class="wrapper">
		<div class="btn"></div>
	</div>
</Centerer>

<style>
	.wrapper {
		outline: 5px dotted var(--accent);
		height: 300px;
		width: 500px;
		position: relative;
	}
	@keyframes TransitioningBackground {
		0% {
			background-position: 1% 0%;
		}
		50% {
			background-position: 99% 100%;
		}
		100% {
			background-position: 1% 0%;
		}
	}

	.btn {
		font-size: 1rem;
		font-weight: 600;
		color: white;
		text-align: center;
		width: 100%;
		height: 100%;
		border-radius: 5px;
		/* // for shine & gradient effects to work */
		position: relative;
		overflow: hidden;
		/* // for background color shift */
		/* background-image: (linear-gradient(270deg, #8e9ac2, #42579a)); */
		/* background-size: 400% 400%; */
		/* animation: TransitioningBackground 10s ease infinite; */
	}

	.btn::before {
		content: '';
		display: block;
		position: absolute;
		background: white;
		opacity: 0.5;
		width: 60px;
		height: 100%;
		top: 0;
		filter: blur(80px);
		transform: translateX(-500%) skewX(-15deg);
	}

	.btn::after {
		content: '';
		display: block;
		position: absolute;
		background-color: white;
		opacity: 0.5;
		width: 30px;
		height: 100%;
		top: 0;
		filter: blur(20px);
		transform: translateX(-500%) skewX(-15deg);
	}

	/* // psuedo-elements for right- and left-side shine animations */
	.btn:hover::before,
	.btn:hover::after {
		transform: translateX(2000%) skewX(-15deg);
		transition: 0.7s;
	}
</style>
