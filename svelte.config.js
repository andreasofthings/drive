import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // We've configured the Cloudflare adapter.
    // See https://svelte.dev/docs/kit/adapters for more information.
    adapter: adapter(),
  },
};

export default config;
