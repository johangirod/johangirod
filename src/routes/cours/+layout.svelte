<main class="prose prose-slate container mx-auto my-12 px-4 lg:prose-lg lg:px-0">
	<slot />
</main>

<style>
	:global(pre) {
		border-radius: 0.25rem;
		background-color: rgba(66, 180, 255, 0.08) !important;
	}
	:global(summary) {
		font-weight: bold !important;
		
	}
	:global(summary:hover) {
		cursor: pointer;
	}
</style>
