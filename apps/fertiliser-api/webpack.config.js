const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    externals: [{ 'aws-sdk': 'commonjs aws-sdk' }],
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    },
    target: 'node',
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.resolve('.webpackCache'),
                        },
                    },
                    'babel-loader',
                ],
            },
        ],
    },
    plugins: [new ForkTsCheckerWebpackPlugin(), new ZipPlugin()],
}
