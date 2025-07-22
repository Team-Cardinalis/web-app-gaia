import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/web-app-gaia'; // Change to your repo name if different

export default {
  kit: {
    adapter: adapter(),
    paths: { base },
    serviceWorker: { register: true }
  },
  preprocess: vitePreprocess()
};
