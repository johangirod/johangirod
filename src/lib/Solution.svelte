<!-- A component that hides children an behind an input with a code -->

<script>
	import { fly } from 'svelte/transition';
	export let code = '';
	let input = '';

	$: show = input.toUpperCase() === code.toUpperCase();
</script>

<div class="border-l-2 border-dashed border-gray-300 pl-4 -ml-4">
	<span class="font-bold inline-block mr-2">Solution</span>
	{#if show}
		<div transition:fly>
			<slot />
		</div>
	{:else}
		<label class="text-sm">
			> Pour voir la solution, saisissez le code
			<input
				class="border-2 border-gray-300 rounded-md p-2 w-12"
				type="text"
				bind:value={input}
				aria-label="Code pour afficher la solution"
			/>
		</label>
	{/if}
</div>
