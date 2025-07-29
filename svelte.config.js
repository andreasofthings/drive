import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Configure the static adapter to build for static hosting platforms.
    // See https://svelte.dev/docs/kit/adapters for more information.
    adapter: adapter({
      // The directory to write the generated HTML files to.
      pages: "build",
      // The directory to write the generated JS, CSS, and other assets to.
      assets: "build",
      // A fallback page for Single-Page App (SPA) mode.
      // This is crucial for routing on platforms like Cloudflare Pages.
      fallback: "index.html",
      // Precompress assets to improve performance (optional but good practice).
      precompress: false,
    }),
  },
};

export default config;
