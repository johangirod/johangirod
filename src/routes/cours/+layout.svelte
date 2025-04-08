<script lang="ts">
	import { onNavigate } from '$app/navigation';

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
	const { data, children } = $props();
	const headings = $derived((data.headings ?? []).filter((heading) => heading.level >= 2));

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="lg:grid lg:grid-cols-[0,auto,1fr] lg:gap-8 xl:grid-cols-[1fr,auto,1fr]">
	<div></div>

	<div
		class="prose flex-1 lg:prose-lg prose-h1:inline-block prose-h1:border-y-8 prose-h1:border-pink-500 prose-h1:px-2 prose-h1:pb-3 prose-h1:pt-2 prose-h1:text-4xl prose-h2:text-3xl xl:col-start-2"
	>
		<div style="view-transition-name: breadcrumb" class="container prose mx-auto">
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
		</div>
		<!--
		<button class="mb-4 block rounded bg-pink-100 px-4 py-2 text-pink-700 lg:hidden">
			Afficher le sommaire
		</button> -->
		<main class="mt-8">
			{@render children()}
		</main>
	</div>

	<nav>
		<div class="prose-sm top-0 max-h-[100vh] overflow-auto lg:sticky lg:mt-20">
			<ul>
				{#each headings as heading}
					<li
						class="block {heading.level === 2
							? ''
							: heading.level === 3
								? '!pl-4'
								: heading.level === 4
									? '!pl-8'
									: heading.level === 5
										? '!pl-12'
										: '!pl-16'}"
					>
						<a class="text-gray-400 hover:text-gray-600" href={'#' + heading.slug}
							>{heading.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
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

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		:root::view-transition-old(root) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		:root::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}
</style>
