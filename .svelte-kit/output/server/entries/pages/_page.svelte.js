import "clsx";
import { w as pop, u as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<main class="svelte-t6mbu0"><h1>SvelteKit with Google Drive Picker Element</h1> <p>This example uses the official and much simpler <a href="https://github.com/googleworkspace/drive-picker-element" target="_blank" rel="noopener noreferrer" class="svelte-t6mbu0">@googleworkspace/drive-picker-element</a>.</p> <p><strong>Action Required:</strong> You must replace the placeholder
        credentials in the <code>&lt;script></code> block with your own Google Cloud Client ID, App
        ID, and API Key.</p> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></main>`);
  pop();
}
export {
  _page as default
};
