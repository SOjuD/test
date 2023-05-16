const { merge } = require("webpack-merge");
const PATHS = require("./paths.js");
const baseWebpackConfig = require("./webpack.config");

module.exports = merge(baseWebpackConfig, {
	mode: "development",
	devServer: {
		static: {
			directory: PATHS.PUBLIC,
		},
		compress: true,
		port: 9000,
		hot: true,
	},
});
