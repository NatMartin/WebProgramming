/*
	server.spec.js
*/
var http = require('http');
var server = require("../server.js");

var ROOT_DIR = "html/";

describe("Server", function () {

	it("is tested with jasmine-node", function() {
		expect(true).toBe(true);
	});

	it("server() to be defined", function() {
		expect(server).toBeDefined();
	});

	it("server() to respond 200 to /", function() {
		var statusCode = 0;
		http.get('http://html', function(responce) {
			expect(responce.statusCode).toBe(200);
			statusCode = responce.statusCode;
		});
		console.log("server to respond 200 to /. statusCode = " + statusCode);
	});

	it("server() to respond 200 to /index.html", function() {
		http.get('http://html/index.html', function(responce) {
			expect(responce.statusCode).toBe(200);
		});
	});

	it("server() to respond 404 to /notfound.html", function() {
		http.get('http://html/notfound.html', function(responce) {
			expect(responce.statusCode).toBe(404);
		});
	});

	it("server() to respond to /", function() {
		http.get('http://html', function(responce) {
			expect(responce.statusCode).not.toBe(404);
		});
	});
	it("False = true to fail", function() {
		expect(false).toBe(true);
	})

});