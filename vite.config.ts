import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), VitePWA({
		registerType: 'autoUpdate',
		includeAssets: ['favicon.svg'],
		manifest: {
			name: 'Web App Gaia',
			short_name: 'GaiaApp',
			description: 'A Progressive Web App built with SvelteKit',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'favicon.svg',
					sizes: 'any',
					type: 'image/svg+xml'
				}
			]
		}
	})]
});
