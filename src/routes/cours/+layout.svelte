<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import { showSolution } from '$lib/showSolution';
	import { onMount } from 'svelte';

	let title: string = '...';
	onMount(() => {
		page.subscribe(() => {
			title = document.querySelector('h1')?.textContent || '';
		});
	});
</script>

<div class="lg:prose-lg">
	<Breadcrumb
		links={[
			{ href: '/', label: 'Accueil' },
			{
				href: '/cours/',
				label: 'Cours et TP'
			},
			$page.route.id?.match(/cours\/.+/)
				? {
						href: $page.url,
						label: title
					}
				: null
		].filter(Boolean)}
	/>
	{#if $showSolution && $page.route.id?.match(/cours\/.+/)}
		<span
			class="ml-2 inline-block rounded-full bg-pink-500 px-2 py-1 text-sm font-semibold text-white
	">Avec corrigé</span
		>
	{/if}
	<main
		class=" mt-8 prose-h1:inline-block prose-h1:border-y-8 prose-h1:border-pink-500 prose-h1:px-2 prose-h1:pb-3 prose-h1:pt-2 prose-h1:text-4xl prose-h2:text-3xl"
	>
		<slot />
	</main>
</div>

<style>
	:global(pre) {
		border-radius: 0.25rem;
		background-color: rgba(66, 180, 255, 0.08) !important;
		margin-top: 1em !important;
	}
	:global(summary) {
		font-weight: bold !important;
	}
	:global(summary:hover) {
		cursor: pointer;
	}
</style>
