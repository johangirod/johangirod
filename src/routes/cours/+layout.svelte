<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte';
</script>

<div class="lg:prose-lg">
	<Breadcrumb
		links={[
			{ href: '/', label: 'Accueil' },
			{
				href: '/cours/',
				label: 'Cours'
			}
		]}
	/>
	<main class="">
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
