import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterStatic from '@sveltejs/adapter-static';
import rehypeSlug from 'rehype-slug';
import { remarkHeadings } from './src/lib/utils/remarkHeadings.js';

const highlighter = await createHighlighter({
	themes: ['github-light'],
	langs: ['html', 'css', 'javascript', 'typescript', 'sql', 'bash', 'json', 'handlebars']
});
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	remarkPlugins: [remarkHeadings],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'github-light' }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapterCloudflare({})
		// adapter: adapterStatic({})
	},

	extensions: ['.svelte', '.md']
};

export default config;
