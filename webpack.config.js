const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map', // enum
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    // html-loader
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    // html-loader
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    // html-loader
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // sass-loader
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "Tether": 'tether'
        })
    ]
}