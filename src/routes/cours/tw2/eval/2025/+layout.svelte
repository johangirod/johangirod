<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Prevent text selection
		document.body.style.userSelect = 'none';

		// Prevent right click
		document.addEventListener('contextmenu', (e) => e.preventDefault());

		// Prevent keyboard shortcuts for console
		document.addEventListener('keydown', (e) => {
			// Prevent F12
			if (e.key === 'F12') {
				e.preventDefault();
			}

			// Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
			if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
				e.preventDefault();
			}
		});
	});
</script>

<div class="bg-white">
	<slot />
</div>

<style>
	:global(*) {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	:global(div) {
		background-color: white;
	}

	:global(.important) {
		z-index: -1;
		position: absolute;
		top: 0;
		overflow: hidden;
		max-width: 100px;
	}
</style>
