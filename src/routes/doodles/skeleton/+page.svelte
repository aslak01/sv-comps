<script lang="ts">
	import SkeletonAnim from './SkeletonAnim.svelte';
	import GridAnim from './GridAnim.svelte';
	import Spinner from './Spinner.svelte';
</script>

<div class="container">
	<div class="par">
		<div class="wrapper text" style="width: 500px">
			<SkeletonAnim type="linear" />
		</div>
		<div class="wrapper text" style="width: 600px">
			<SkeletonAnim type="linear" />
		</div>
		<div class="wrapper text" style="width: 400px">
			<SkeletonAnim type="linear" />
		</div>
		<div class="wrapper text" style="width: 40px">
			<SkeletonAnim type="linear" />
		</div>
	</div>
	<div class="wrapper box">
		<SkeletonAnim type="circular" />
	</div>
	<div class="wrapper box">
		<Spinner />
	</div>

	<div class="wrapper box">
		<GridAnim />
	</div>

	<div class="wrapper box">
		<SkeletonAnim />
	</div>
</div>

<style>
	.container {
		height: 100%;
		width: 100%;
		display: grid;
		align-content: center;
		justify-content: center;
		gap: 3lh;
		margin-bottom: 3lh;
	}

	.wrapper {
		overflow: hidden;
		position: relative;
	}
	.box {
		width: 600px;
		height: 300px;
	}
	.par {
		display: grid;
		gap: 0.5lh;
	}

	.text {
		height: 0.8lh;
		width: 600px;
		background: #eee;
	}
</style>
