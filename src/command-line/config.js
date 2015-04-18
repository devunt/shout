var fs = require("fs");
var path = require("path");
var program = require("commander");
var mkdirp = require("mkdirp");
var child = require("child_process");
var Helper = require("../helper");

program
	.command("config")
	.description("Edit config: '" + __dirname + "/../../config.js'")
	.action(function() {
		child.spawn(
			process.env.EDITOR || "vi",
			[__dirname + "/../../config.js"],
			{stdio: "inherit"}
		);
	});
