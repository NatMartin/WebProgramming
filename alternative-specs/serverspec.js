/*
	serverspec.js
*/
var rewire = require('rewire');
var server = rewire("../lib/server.js");

var fsFake = {
	readFile: function (path, callback) {
		callback(null, "Works");
	}
};

var urlFake = {
	parse: function (urlStr, parseQueryString, slashedDenotehost) {
		console.log("Parsing url " + urlStr)
		return urlStr;
	}
}

var requestFake = {
	url : "foo"
};

var resultFake = {
	headValue: 0,
	returnString: "",
	writeHead: function(value) {
		console.log("writeHead " + value);
		this.headValue = value
	},
	end: function(value) {
		console.log("end " + value);
		this.returnString = value;
	}
};

server.__set__("fs", fsFake);
server.__set__("url", urlFake);

describe("Server", function () {

	it("is tested with jasmine-node", function() {
		expect(true).toBe(true);
	});

	it("defines server()", function() {
		expect(server).toBeDefined();
	});

	it("uses a Mock for fs", function() {
		fsFake.readFile("anything", function(error, doc) {
			expect(doc).toEqual("Works");
			expect(error).toBeNull();
		});
	});

	it("reads a file passed in though request.url", function() {
		server.server(requestFake, resultFake);
		expect(resultFake.headValue).toEqual(200);
		expect(resultFake.returnString).toEqual('Works');
	});

});