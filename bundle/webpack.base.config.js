import {resolve} from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export default {
	devtool:'eval-source-map',
	context: resolve('src'),
	entry: [
		'app.js'
	],
	output: {
		path: resolve('dist'),
		filename: 'bundle.js'
	},
	
}