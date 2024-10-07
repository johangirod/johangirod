<script>
	import { fly } from 'svelte/transition';
	import { showSolution } from './showSolution';

	// Show the solution if the code is correct
	let show = false;
	let canShowSolution = $showSolution;

	function handleToggle() {
		show = !show;
	}

	const id = Math.random().toString(36).substring(2);
</script>

{#if canShowSolution}
	<div class="-ml-4 border-l-2 border-dashed border-gray-300 pl-4">
		<span class="mr-2 inline-block font-bold">Solution</span>
		<button
			class="inline-block text-xs text-gray-500 hover:text-gray-700"
			on:click={handleToggle}
			aria-label="Afficher la solution"
			aria-expanded={show}
			aria-controls={id}
		>
			{#if show}
				Cacher
			{:else}
				Afficher
			{/if}
		</button>
		{#if show}
			<div transition:fly={{ y: -20, duration: 200 }} {id}>
				<slot />
			</div>
		{/if}
	</div>
{/if}
