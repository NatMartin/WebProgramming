var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html/";

var server = require("../server.js")

describe("Server", function () {

	request = new http.IncomingMessage;

	it("is tested with jasmine-node", function() {
		expect(true).tobe(false);
	})

	it("Shows the requested file", function() {
		expect(true).tobe(true);
	})
});