<script lang="ts">
	export let selectedCountries: string[] = [];
	let deselectedCountries: string[] = [];

	const addCountry = (country: string) => {
		selectedCountries = [...selectedCountries, country];
		const index = deselectedCountries.indexOf(country);
		if (index >= 0) {
			deselectedCountries.splice(index, 1);
			deselectedCountries = deselectedCountries;
		}
	};

	const removeCountry = (country: string) => {
		const index = selectedCountries.indexOf(country);
		if (index >= 0) {
			selectedCountries.splice(index, 1);
			selectedCountries = selectedCountries;
			deselectedCountries = [...deselectedCountries, country];
		}
	};
</script>

<div class="countryselector">
	<div>
		<h2>Remove countries</h2>
		{#each selectedCountries as country}
			<button on:click={() => removeCountry(country)}>{country}</button>
		{/each}
	</div>
	{#if deselectedCountries.length > 0}
		<div>
			<h2>Add countries</h2>
			{#each deselectedCountries as cn}
				<button on:click={() => addCountry(cn)}>{cn}</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.countryselector {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		font-size: 16pt;
		line-height: var(--font-lineheight-2);
	}
	button {
		outline: 0;
		border: 0;
		background: transparent;
		color: var(--indigo-0);
		font-size: 16pt;
	}
	button:hover {
		cursor: pointer;
	}
	h2 {
		font-size: 16pt;
	}
</style>
