import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { alien } from 'svelte-preprocess-alien';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), alien('@@')],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: ''
		}
	}
};

export default config;