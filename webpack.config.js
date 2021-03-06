const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /galleria.js$/,
                loader: "imports-loader?this=>window"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new CopyWebpackPlugin([
            { from: 'node_modules/galleria/dist/themes/classic/galleria.classic.min.js', to: 'assets/galleria.classic.js' },
            { from: 'node_modules/galleria/dist/themes/classic/galleria.classic.min.css', to: 'assets/galleria.classic.css' },
        ])
    ]
};
