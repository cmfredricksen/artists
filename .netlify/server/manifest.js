export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/cassett.jpg","images/Cecilia-Rolando.jpg","images/kahlo.jpg","images/kandinsky.jpg","images/manet.jpg","images/monet.jpg","images/valley.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-3029cfd8.js","imports":["_app/immutable/start-3029cfd8.js","_app/immutable/chunks/index-351d0b21.js","_app/immutable/chunks/singletons-e14478ad.js","_app/immutable/chunks/preload-helper-b21cceae.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/artists",
				pattern: /^\/api\/artists\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/artists/_server.js')
			},
			{
				id: "/artists",
				pattern: /^\/artists\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/artists/tag/[tag]",
				pattern: /^\/artists\/tag\/([^/]+?)\/?$/,
				names: ["tag"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/artists/[artist]",
				pattern: /^\/artists\/([^/]+?)\/?$/,
				names: ["artist"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
