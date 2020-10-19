const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: path.join(__dirname, 'home', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.home.json"
                    }
                }],
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'home-static')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            favicon: "./home/assets/favicon.ico",
            template: path.join(__dirname, 'home', 'index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'home-static'),
        compress: true,
        port: 9000,
        hot: true
    }
}