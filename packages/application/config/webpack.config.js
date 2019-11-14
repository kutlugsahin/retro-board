const path = require('path');
const entryFile = path.join(__dirname, '..', 'src', 'index.tsx');
const dist = path.join(__dirname, '..', 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: entryFile,
    output: {
        path: dist,
        filename: 'index.js',
    },
    devServer: {
        contentBase: dist,
        compress: true,
        port: 3000,
        stats: {
            display: process.env.NODE_ENV === 'production' ? 'verbose' : 'minimal',
        },
        proxy: {
            '/api': 'http://localhost:8080',
        },
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.join(__dirname, 'babel.config.js'),
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            // publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    // Translates CSS into CommonJS
                    {
                        loader: 'typings-for-css-modules-loader?modules&camelCase',
                        options: {
                            modules: true, // this option must be enabled
                            camelCase: true,
                            namedExport: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
};
