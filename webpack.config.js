const {resolve} = require('path');

module.exports = {
    entry: {
        webworker: './src/webworker/index.ts',
        sharedworker: './src/shared-worker/index.ts',
    },
    output: {
        path: resolve(__dirname, 'dist'),
        publicPath: "dist/",
        filename: "[name].bundle.js"
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts'
        ]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts?$/,
                use: "source-map-loader"
            },
            {
                // For our normal typescript
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json'
                        }
                    }
                ],
                exclude: /(?:node_modules)/,
            },
        ]
    },
    devtool: 'inline-source-map'
};