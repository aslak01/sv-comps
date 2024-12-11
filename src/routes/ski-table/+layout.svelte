<script lang="ts">
	let { children } = $props();
</script>

<div class="wrapper">
	{@render children()}
</div>

<style>
	.wrapper {
		max-width: 800px;
	}
</style>
