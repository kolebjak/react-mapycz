const path = require('path');

module.exports = {
	entry: {
		index: './src/index.js',
		playground: './playground/index.js',
	},

	output: {
		path: path.resolve(__dirname, './playground/__build__'),
		publicPath: '/__build__/',
		filename: '[name].js',
		library: 'react-mapycz',
		libraryTarget: 'umd',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: ['babel-loader', 'eslint-loader'],
			},
		],
	},

	resolve: {
		alias: {
			'react-mapycz': path.resolve(__dirname, './src'),
		},
	},
};