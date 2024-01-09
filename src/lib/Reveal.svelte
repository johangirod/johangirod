<script lang="ts">
	import 'highlight.js/styles/github.css';
	import 'reveal.js/dist/reveal.css';
	import { onMount, tick } from 'svelte';
	import { bounceOut, cubicIn, cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let loading = false;

	onMount(async () => {
		await tick();
		const [{ default: Highlight }, { default: Markdown }, { default: Notes }, { default: Reveal }] =
			await Promise.all([
				import('reveal.js/plugin/highlight/highlight'),
				import('reveal.js/plugin/markdown/markdown'),
				import('reveal.js/plugin/notes/notes'),
				import('reveal.js')
			] as const);

		let deck = new Reveal({
			plugins: [Highlight, Markdown, Notes],
			hash: true
		});
		deck.initialize({
			embedded: true,
			minScale: 0.2,
			width: 1000,
			height: 800,
			maxScale: 3.0,
			controlsTutorial: true,
			controls: true,
			progress: true,
			slideNumber: true
		});
		loading = false;
	});
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="/node_modules/highlight.js/styles/github.css" />
	<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" /> -->
</svelte:head>

<div
	class="mt-14 prose-h2:text-pink-500 prose-p:text-2xl prose-strong:text-pink-500 prose-li:text-left prose-li:text-2xl md:-ml-14 md:-mr-14"
>
	<div class="reveal rounded-md border border-gray-200 shadow-lg">
		{#if loading}
			<div
				class="absolute z-50 flex h-full w-full items-center justify-center bg-white"
				out:fade={{ duration: 400, easing: cubicOut }}
			>
				<div
					class="absolute z-50 flex h-full w-full items-center justify-center bg-white"
					in:fly={{ delay: 500, duration: 500, easing: bounceOut, y: -50 }}
					out:fly={{ duration: 200, easing: cubicIn, y: -50 }}
				>
					<div class="h-32 w-32 animate-spin">
						<svg
							class="h-full w-full text-pink-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0
                                3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		{/if}
		<div class="slides">
			<slot />
		</div>
	</div>
</div>

<style>
	.reveal {
		height: 500px;
	}
</style>
