const path = require('path');
const { env } = require('process');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); 
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // we are building a bundle for node js and not for browser
    target: 'node',

    // tell webpack the root file for our server app

    entry: './src/index.js',

    // Tell webpack where the output file will be stored

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);