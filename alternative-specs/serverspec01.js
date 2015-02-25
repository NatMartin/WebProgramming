/*
	serverspec.js
*/
var serverModule = require("../lib/server.js");

describe("Server", function () {

	it("is tested with jasmine-node", function() {
		expect(true).toBe(true);
	});

	it("defines server()", function() {
		expect(serverModule.server).toBeDefined();
	});

});