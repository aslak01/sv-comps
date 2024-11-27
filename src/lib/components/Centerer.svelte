<script lang="ts">
	let { children } = $props();
</script>

<div class="centerer">
	{@render children()}
</div>

<style>
	.centerer {
		width: 100%;
		min-height: 100dvh;
		display: grid;
		justify-content: center;
		align-content: center;
	}
</style>
