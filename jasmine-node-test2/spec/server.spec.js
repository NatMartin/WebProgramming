/*
var fs = require('fs');
var http = require('http');
var url = require('url');
*/
var server = require("../server.js");

var ROOT_DIR = "html/";

describe("Server", function () {

	it("is tested with jasmine-node", function() {
		expect(true).toBe(true);
	});

	it("server() to be defined", function() {
		expect(server).toBeDefined();
	});

});