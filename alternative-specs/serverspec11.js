/*
	serverspec.js
*/
var rewire = require("rewire")
var serverModule = rewire("../lib/server.js");

var fsFake = {
	readFile: function(path, callback){
		callback(null, "Works");
	}
}
var requestFake = {
	url: "fakeUrl"
};
var resultFake = {
	headValue: 0,
	returnString: "none",
	end: function(value) {
		this.returnString = value;
	},
	writeHead: function(value) {
		this.headValue = value;
	}
};

serverModule.__set__("fs", fsFake);

describe("Server", function () {

	it("is tested with jasmine-node", function() {
		expect(true).toBe(true);
	});

	it("defines server()", function() {
		expect(serverModule.server).toBeDefined();
	});

	it("uses a Mock for fs", function() {
		fsFake.readFile("anything", function(error, doc) {
			expect(doc).toEqual("Works");
			expect(error).toBeNull();
		});
  	});

	it("reads a file passed in though request.url", function() {
		serverModule.server(requestFake, resultFake);
		expect(resultFake.headValue).toEqual(200);
		expect(resultFake.returnString).toEqual('Works');
	});

	it("write the url out to the console", function() {
		var consoleContents = "";
		serverModule.__with__({
    		console: {
    			log: function(value) {
    				consoleContents = value;
    			}
    		}
		})(function () {
			serverModule.server(requestFake, resultFake);
			expect(consoleContents).toEqual(requestFake.url);
		});

	});

});