module.exports = {
	name: "DGW", // optional, falls back to object key
	description: "DGW.ltd web sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://wp.dgw.ltd/blocks/", 
		"https://njk.dgw.ltd/", 
		"https://11ty.dgw.ltd/", 
		"https://twitter.dgw.ltd/"
	]
};	