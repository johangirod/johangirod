<script lang="ts">
	interface Props {
		title: string;
		role?: string;
		href?: string;
		start: Date;
		end?: Date;
		technologies: string[];
		keyFigures?: string[];
		description?: import('svelte').Snippet;
		people?: import('svelte').Snippet;
		feeling?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		role,
		href,
		start,
		end,
		technologies,
		keyFigures,
		description,
		people,
		feeling,
		children
	}: Props = $props();

	function formatDate(date: Date): string {
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long'
		}).format(date);
	}

	function formatDuration(start: Date, end: Date = new Date()) {
		const years = end.getFullYear() - start.getFullYear();
		const months = end.getMonth() - start.getMonth() + 1;

		const durationFormatter = new Intl.DurationFormat('fr-FR', { style: 'long' });
		return durationFormatter.format({ years, months }, 'year');
	}

	function formatDateRange(start: Date, end?: Date): string {
		if (end) {
			return `${formatDate(start)} - ${formatDate(end)} | ${formatDuration(start, end)}`;
		}
		return `Depuis ${formatDate(start)} | ${formatDuration(start)}`;
	}
</script>

<article
	class="mb-8 max-w-full rounded-lg border-gray-200 bg-white md:border md:p-6 md:shadow-sm lg:p-8 print:p-0"
>
	<!-- En-tête avec titre et période -->
	<header>
		<div class="mb-4 flex flex-wrap-reverse items-baseline justify-between gap-4">
			<h3 class="!m-0">
				{#if href}
					<a
						{href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Voir le site {title} (s'ouvre dans une nouvelle fenêtre)"
						class="font-bold"
					>
						{title}
					</a>
				{:else}
					{title}
				{/if}
			</h3>
			<small class="mt-4">
				<time
					class="whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-600"
				>
					{formatDateRange(start, end)}
				</time>
			</small>
		</div>
		<!-- Description -->
		{#if description}
			<div class="">
				{@render description()}
			</div>
		{/if}
		{#if role}
			<p class="font-semibold text-pink-600">{role}</p>
		{/if}
	</header>

	<!-- Contenu principal (children) -->
	{#if children}
		<div>
			{@render children()}
		</div>
	{/if}

	<!-- Chiffres clés -->
	{#if keyFigures && keyFigures.length > 0}
		<h4 class="sr-only">Chiffres clés :</h4>
		<small>
			<ul class="not-prose flex flex-wrap gap-2">
				{#each keyFigures as figure}
					<li
						class="not-prose print-color rounded-md bg-pink-100 px-2 py-1 font-medium text-pink-800"
					>
						{figure}
					</li>
				{/each}
			</ul>
		</small>
	{/if}
	<small>
		<!-- Technologies utilisées -->
		{#if technologies.length > 0}
			<h4 class=" font-semibold text-gray-900">Technologies et savoir-faire</h4>
			<ul class="not-prose flex flex-wrap gap-2">
				{#each technologies as tech}
					<li
						class="not-prose print-color rounded-md bg-blue-100 px-2 py-1 font-medium text-blue-800"
					>
						{tech}
					</li>
				{/each}
			</ul>
		{/if}

		<!-- Équipe/Personnes -->
		{#if people}
			<div class="">
				<h4 class="inline-block font-semibold text-gray-900">Fonctionnement d'équipe</h4>
				{@render people()}
			</div>
		{/if}
		<!-- Ressenti -->
		{#if feeling}
			<div
				class="mt-4 flex rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 px-6 italic print:mt-0 print:p-0"
			>
				{@render feeling()}
			</div>
		{/if}
	</small>
</article>

<style>
	.print-color {
		print-color-adjust: exact !important;
	}
</style>
