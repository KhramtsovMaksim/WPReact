"use strict";
var path           = require('path'),
    argv           = require('yargs').argv,
    webpack        = require('webpack'),
    Clean          = require('clean-webpack-plugin'),
    combineLoaders = require('webpack-combine-loaders');

var isDevServer   = process.argv[1].indexOf('webpack-dev-server') >= 0,
    isDevelopment = !argv.live;

console.log((isDevelopment) ? '!----DEV----!' : '!****PROD****!');

module.exports = {
	entry     : (function () {
		var entry = {
			main : ['main']
		};
		if (isDevServer){
			for ( var entryName in entry ) {
				entry[entryName].unshift(
					'webpack-dev-server/client?http://localhost:7777',
					'webpack/hot/dev-server'
				);
			}
		}
		return entry;
	})(),
	output    : {
		path          : '../dist',
		publicPath    : '/dist/',
		filename      : '[name].js',
		chunkFilename : isDevelopment ? '[name].js' : '[name].[chunkhash].js'
	},
	resolve   : {
		extensions         : [
			'',
			'.less',
			'.css',
			'.png',
			'.js',
			'.min.js',
			'.jsx'
		],
		modulesDirectories : [
			'',
			'components',
			'web_modules',
			'node_modules'
		]
	},
	devtool   : 'source-map',
	module    : {
		loaders : [{
			test    : /\.jsx?$/,
			exclude : /node_modules/,
			loader  : combineLoaders(
				(function () {
					var js_loaders = [{
						loader : 'babel',
						query  : {
							presets : ['es2015', 'react']
						}
					}];

					if (isDevServer){
						js_loaders.unshift({
							loader : 'react-hot'
						});
					}
					return js_loaders;
				}())
			)
		}, {
			test   : /\.rt$/,
			loader : 'react-templates-loader'
		}]
	},
	plugins   : (function () {
		var plugins = [
			new Clean(['dist']),
			new webpack.ProvidePlugin({
				React    : 'react',
				ReactDOM : 'react-dom'
			})
		];

		if (isDevServer){//DEV_SERVER
			plugins.unshift(
				new webpack.HotModuleReplacementPlugin()
			)
		}
		if (!isDevelopment){//LIVE
			plugins.push(
				new webpack.optimize.UglifyJsPlugin({
					compress : {
						warnings     : false,
						drop_console : true,
						unsafe       : true
					},
					output   : {
						comments : false
					}
				})
			);
		}

		return plugins;
	}()),
	devServer : {
		port        : 7777,
		contentBase : '../',
		hot         : true
	}
};