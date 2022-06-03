module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"roboto-slab": ['"Roboto Slab"'],
				parisienne: ['"Parisienne"'],
			},
			colors: {
				header: "#DFECDE",
				section: "#EFF5EF",
				text: "#3E4C57",
				contrast: "#E4AF78",
				footer: "#7B8284",
			},
			backgroundImage: {
				"header-pattern": "url('/pattern.png')",
			},
		},
	},
	plugins: [],
};
