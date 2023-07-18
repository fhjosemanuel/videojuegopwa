module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,js,css,jpg,webp,png,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};