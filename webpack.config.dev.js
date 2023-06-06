
const { merge } = require("webpack-merge");
const PATH = require("./paths.js");
const baseWebpackConfig = require("./webpack.config");

module.exports = merge(baseWebpackConfig, {
	mode: "development",
	devServer: {
		port: 9000,
		hot: true,
		historyApiFallback: true,
	},
});
