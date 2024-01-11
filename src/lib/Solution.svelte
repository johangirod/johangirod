<!-- A component that hides children an behind an input with a code -->

<script>
	import { fly } from 'svelte/transition';
	export let code = '';
	let input = '';

	// Show the solution if the code is correct
	let show = false;
	let codeCorrect = false;

	$: codeCorrect = input.toUpperCase() === code.toUpperCase();

	function handleToggle() {
		show = !show;
	}

	const id = Math.random().toString(36).substring(2);
</script>

<div class="-ml-4 border-l-2 border-dashed border-gray-300 pl-4">
	<span class="mr-2 inline-block font-bold">Solution</span>
	{#if codeCorrect}
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
	{:else}
		<label class="text-sm">
			> Pour voir la solution, saisissez le code
			<input
				class="w-12 rounded-md border-2 border-gray-300 p-2"
				type="text"
				bind:value={input}
				aria-label="Code pour afficher la solution"
			/>
		</label>
	{/if}
</div>
