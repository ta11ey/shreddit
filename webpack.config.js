var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.jsx')
    ],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
		},
	module:{
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
    		}
			]
   	 }
}