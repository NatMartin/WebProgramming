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

describe("Server", function () {

	var resultFake = null;
	var requestFake = null;

	function setFakeResultRequest(fakeURL) {
		requestFake = {
			url: fakeURL
		};
		resultFake = {
			headValue: 0,
			returnString: "none",
			end: function(value) {
				this.returnString = value;
			},
			writeHead: function(value) {
				this.headValue = value;
			}
		};
	};

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
		setFakeResultRequest("fakeURL");
		serverModule.__with__({
			fs: fsFake
		})(function () {
			serverModule.server(requestFake, resultFake);
			expect(resultFake.headValue).toEqual(200);
			expect(resultFake.returnString).toEqual('Works');
		});
	});

	it("write the url out to the console", function() {
		setFakeResultRequest("fakeURL");
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

	it("Example: writing then reading an array", function(done) {
		var fs = require("fs");
		blogWritten = ['blog entry 1', 'blog entry 2']
		fs.writeFileSync("test.html", JSON.stringify(blogWritten));
		fs.readFile("test.html", 'utf8', function(error, doc) {
			if (error) {
				throw error;
			} else {
				blogRead = JSON.parse(doc);
				expect(blogRead).toEqual(blogWritten);
				done();
			}
		})

	});

	it("reads an array of blog posts from the disk", function() {
		setFakeResultRequest("spec/test.html");
		var fs = require("fs");
		blogWritten = ['blog entry 1', 'blog entry 2']
		fs.writeFileSync("html/spec/test.html", JSON.stringify(blogWritten));

		serverModule.server(requestFake, resultFake);
		console.log("Server result is: " + resultFake.returnString);
		expect(resultFake.returnString).toEqual(JSON.stringify(blogWritten));
	});

});