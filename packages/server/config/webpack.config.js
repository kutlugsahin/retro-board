const path = require('path');
const entryFile = path.join(__dirname, '..', 'src', 'index.ts');
const dist = path.join(__dirname, '..', 'dist');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: entryFile,
    output: {
        path: dist,
        filename: 'index.js',
    },
    devtool: 'eval',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.join(__dirname, 'babel.config.js'),
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()],
};
