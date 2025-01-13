<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	onMount(() => {
		// Add copy button to code blocks
		document.querySelectorAll('pre.shiki').forEach((pre) => {
			const button = document.createElement('button');

			button.innerHTML = 'Copier';

			button.className =
				'absolute top-0 right-0 px-2 py-1 bg-pink-500 text-white rounded-bl-md rounded-tr-md   transition-opacity will-change opacity-0 group-hover:opacity-100  hover:brightness-95';

			console.log('hjoojijoijoi');
			// create a div and move pre inside
			const div = document.createElement('div');
			div.className = 'relative group';
			// add button to the div
			div.appendChild(button);

			pre.previousElementSibling?.after(div);
			div.appendChild(pre);

			button.onclick = () => {
				navigator.clipboard.writeText(pre.querySelector('code')!.textContent!);
				const toast = document.createElement('div');
				toast.innerHTML = 'Le code a été copié dans le presse-papier !';
				toast.className = // Tailwind classes, positionned fixed bottom and appear with a transition
					'fixed bottom-0 right-0 p-4 m-4 bg-pink-500 text-white rounded-md shadow-md transition-transform  transition-opacity will-change opacity-0';
				document.body.appendChild(toast);
				setTimeout(() => {
					toast.style.opacity = '1';
				}, 100);
				setTimeout(() => {
					toast.style.transform = 'translateX(100%)';
					toast.style.opacity = '0';
				}, 3000);
				setTimeout(() => {
					toast.remove();
				}, 3100);
			};
		});
	});
</script>

<svelte:head>
	<title>Johan Girod</title>
</svelte:head>

<div
	class="screen:container prose-h2 container prose prose-slate mx-auto my-12 px-4 lg:prose-xl prose-headings:text-slate-800 prose-h1:font-semibold prose-a:transition prose-a:duration-75 hover:prose-a:text-pink-500 lg:px-0 print:mx-0 print:max-w-none"
>
	<slot />
</div>
