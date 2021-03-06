var path = require("path");

module.exports = {
	HOME: (process.env.HOME || process.env.USERPROFILE) + "/.shout",
	getConfig: getConfig
};

function getConfig() {
	return require(__dirname + "/../config");
}
