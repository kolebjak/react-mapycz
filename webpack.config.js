const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
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
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: "./home/assets/favicon.ico",
            template: path.join(__dirname, 'home', 'index.html')
        })
    ],
    devServer: {
        static: path.join(__dirname, 'home-static'),
        compress: false,
        port: 9000,
        hot: true,
        client: {
            progress: true,
            overlay: { errors: true, warnings: false },
        },
    }
}
