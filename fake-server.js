/*
	Fake Server. Just writes out results, requests and errors.
*/
var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html/";

function returnErrorMessage(result, error) {
	result.writeHead(404);
	result.end(JSON.stringify(error));
}

function returnPage(result, page) {
	result.writeHead(200);
	result.end(page);	
}

function server(request, result) {
    var urlObj = url.parse(request.url, true, false);
	console.log("request: " + urlObj.pathname);
    fs.readFile(ROOT_DIR + urlObj.pathname, function(error, page) {
		if (error) {
			console.log("error: " + JSON.stringify(error))
			returnErrorMessage(result, error.toString());
		} else {
			console.log("page: " + page)
			returnPage(result, page);
    	}
    });
}

http.createServer(server).listen(3030);
