const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	externals: [
		'react',
		'react-dom',
		'prop-types',
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
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
		extensions: ['.js'],
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	],

	devServer: {
		hot: true,
	},
};