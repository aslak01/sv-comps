<script lang="ts">
	export let value: number;
	export let label: string;
	export let min = 0.1;
	export let max = 100;
	export let step = 0.3;
</script>

<div class="control">
	<input id={label} type="range" {min} {max} {step} bind:value />
	<label for={label}>{label}: {value}</label>
</div>
