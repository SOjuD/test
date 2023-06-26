module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|svg|pdf|s[ac]ss)$": "<rootDir>/fileMock.js",
	},
};
