module.exports = {
	ssg: {
		description: "Static Site Generator web sites",
		options: {
			freshChrome: "site"
		},
		urls: [
			"https://richholman.com/",
			"https://phonebox.photos/", 
			"https://seasonal.today/"
		]
	},
	wordpress: {
		description: "Wordpress web sites",
		options: {
			freshChrome: "site"
		},
		urls: [
			"https://dogwonder.co.uk/", 
			"https://wp.dgw.ltd/blocks/"
		]
	}, 
	dgwltd: {
		description: "DGW.ltd web sites",
		options: {
			freshChrome: "site"
		},
		urls: [
			"https://wp.dgw.ltd/blocks/", 
			"https://njk.dgw.ltd/", 
			"https://11ty.dgw.ltd/", 
			"https://twitter.dgw.ltd/"
		]
	}
};