<script lang="ts">
	import { fly } from 'svelte/transition';
	import { showSolution } from './showSolution';
	import type { Snippet } from 'svelte';

	const { showAnyway = false, children }: { showAnyway: boolean; children: Snippet } = $props();
	// Show the solution if the code is correct
	let show = $state(false);
	let canShowSolution = $showSolution || showAnyway;

	function handleToggle() {
		show = !show;
	}

	const id = Math.random().toString(36).substring(2);
</script>

{#if canShowSolution}
	<div class="-ml-5 border-l-2 border-dotted border-pink-500 pl-4">
		<span
			class="mr-2 inline-block rounded-full bg-pink-500 px-2 py-1 text-sm font-semibold text-white"
			>Corrigé</span
		>
		<button
			class="inline-block text-sm text-gray-500 hover:text-gray-700"
			onclick={handleToggle}
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
				{@render children()}
			</div>
		{/if}
	</div>
{/if}
