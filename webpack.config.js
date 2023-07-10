const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = arg => {
	const isProduction = arg === 'production'
	const isDevelopment = !isProduction

	return {
		devtool: 'source-map',
		mode: arg,
		entry: {
			index: path.resolve(__dirname, './src/scripts/main.js'),
		},
		output: {
			path: path.resolve(__dirname, './'),
			filename: 'build/[name].bundle.js',
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './src/template.html'),
			}),
			new MiniCssExtractPlugin({
				filename: 'build/styles.css',
			}),
		],

		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(png|jpe?g)$/,
					type: 'asset/resource',
				},
			],
		},

		watch: isDevelopment,
	}
}
