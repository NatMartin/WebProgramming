exports = module.exports = {};

var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

function returnErrorMessage(result, error) {
	result.writeHead(404);
	result.end(JSON.stringify(error));
};

function returnPage(result, page) {
	result.writeHead(200);
	result.end(page);	
};

function returnBlog(result, page) {
	result.writeHead(200);
	result.end(page);	
};

exports.server = function(request, result) {
    var urlObj = url.parse(request.url, true, false);
    console.log(request.url);
    fs.readFile(ROOT_DIR + urlObj.pathname, function(error, page) {
		if (error) {
			returnErrorMessage(result, error);
		} else if (request.url === "spec/test.html") {
			returnBlog(result, page);
//	    	console.log("Test: " + ROOT_DIR + urlObj.pathname + page);
    	} else {
    		returnPage(result, page);
//    		console.log("Static Server: " + ROOT_DIR + urlObj.pathname + page);
    	}
    });
};
