

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.r-eE-_Cb.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/grwyZHeQ.js"];
export const stylesheets = [];
export const fonts = [];
