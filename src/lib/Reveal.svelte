<script>
	import 'highlight.js/styles/github.css';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import { onMount, tick } from 'svelte';

	onMount(async () => {
		await tick();
		const { default: Highlight } = await import('reveal.js/plugin/highlight/highlight');
		const { default: Markdown } = await import('reveal.js/plugin/markdown/markdown');
		const { default: Notes } = await import('reveal.js/plugin/notes/notes');

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
	});
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="/node_modules/highlight.js/styles/github.css" />
	<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" /> -->
</svelte:head>
<div class="mt-14 md:-ml-14 md:-mr-14">
	<div class="reveal rounded-md border border-gray-200 shadow-lg">
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
