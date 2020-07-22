const path = require('path');
const { env } = require('process');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); 

const config = {  
    // tell webpack the root file for our server app

    entry: './src/client/client.js',

    // Tell webpack where the output file will be stored

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);