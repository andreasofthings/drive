export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Cj5QUQN1.js",app:"_app/immutable/entry/app.Dle91Kmg.js",imports:["_app/immutable/entry/start.Cj5QUQN1.js","_app/immutable/chunks/CgjsrV-1.js","_app/immutable/chunks/la739E4B.js","_app/immutable/chunks/grwyZHeQ.js","_app/immutable/entry/app.Dle91Kmg.js","_app/immutable/chunks/0I7qTmtZ.js","_app/immutable/chunks/grwyZHeQ.js","_app/immutable/chunks/la739E4B.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
