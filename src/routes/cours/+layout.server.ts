import { getMarkdownPagesInfo } from '$lib/utils/getMarkdownPageInfo';

export type Metadata = {
	title: string;
	sidebar_position: number;
	menu_title: string;
};

const docPages = await getMarkdownPagesInfo<Metadata>(import.meta.glob('./*/**/+page.md'));

export function load({ url }) {
	const metadata = docPages.find((page) => url.pathname.endsWith(page.path + '/'))?.metadata;
	return {
		menuEntries: docPages.filter((page) => page.path.split('/').length <= 4),
		...metadata
	};
}
