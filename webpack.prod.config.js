const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js',
		controls: './src/controls/index.js',
	},

	externals: [
		'react',
		'react-dom',
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'react-mapycz',
		libraryTarget: 'umd',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: ['babel-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.js'],
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	],
};