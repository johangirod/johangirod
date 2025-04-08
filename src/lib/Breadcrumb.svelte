<!-- Composant for displaying breadcrumbs from link list -->
<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let links: Array<{ href: string; label: string }> = [];
</script>

<div class="mb-2 inline" role="list">
	{#each links as { href, label }, i}
		<li class="inline-block" in:fly={{ x: -5, duration: 150 }}>
			<a {href} class="text-pink-600" aria-label={label}>
				{label}
			</a>
			{#if i < links.length - 1}
				<span class="mx-2 text-gray-500">/</span>
			{/if}
		</li>
	{/each}
</div>

<style>
</style>
