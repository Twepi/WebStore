const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.s?css$/;

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        rules: [
        {
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        },
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '{name}__{local}--[hash:base:5]',
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                },
            ],
            exclude: GLOBAL_CSS_REGEXP
        },
        {
            test: GLOBAL_CSS_REGEXP,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        // new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }),
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV,
        historyApiFallback: true,
    },
    devtool: setupDevtool()
};