'use strict';
var path              = require('path'),
    argv              = require('yargs').argv,
    webpack           = require('webpack'),
    combineLoaders    = require('webpack-combine-loaders'),
    Clean             = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		path          : 'dist',
		publicPath    : 'assets/dist/',
		filename      : '[name].js',
		chunkFilename : isDevelopment ? '[name].js' : '[name].[chunkhash].js'
	},
	resolve   : {
		extensions         : [
			'',
			'.js',
			'.min.js',
			'.jsx'
		],
		modulesDirectories : [
			'',
			'components/generic/dumb',
			'components/generic/smart',
			'components/modules/dumb',
			'components/modules/smart',
			'scss',
			'node_modules',
			'web_modules'
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
							presets : ['es2015', 'stage-1', 'react']//stage-1 for static props definitions
							                                                   // in class
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
		}, {
			test    : /\.scss$/,
			loader  : (
				isDevServer ?
					'style!css!sass' :
					ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
			),
			exclude : /node_modules/
		}]
	},
	plugins   : (function () {
		var plugins = [
			new Clean(['dist']),
			new webpack.DefinePlugin(
				{
					NODE_ENV    : isDevelopment ? "'development'" : "'production'",
					NODE_SERVER : isDevServer ? "'server'" : "'static'"
				}
			),
			new webpack.ProvidePlugin({
				React    : 'react',
				ReactDOM : 'react-dom'
			}),
			new webpack.NoErrorsPlugin()
		];

		if (isDevServer){//DEV_SERVER
			plugins.unshift(
				new webpack.HotModuleReplacementPlugin()
			);
		}
		else {
			plugins.push(new ExtractTextPlugin('[name].css'));
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