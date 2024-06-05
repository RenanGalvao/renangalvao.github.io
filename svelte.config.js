import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { REPO_NAME } from './src/lib/constants/index.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$src: 'src',
			$components: 'src/lib/components',
			$constants: 'src/lib/constants',
			$postcss: 'src/lib/postcss'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : ''
		}
	},
	preprocess: vitePreprocess(),
};

export default config;
