/*
	serverspec.js
*/
var rewire = require("rewire")
var serverModule = rewire("../lib/server.js");
var fsFake = null;

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

});