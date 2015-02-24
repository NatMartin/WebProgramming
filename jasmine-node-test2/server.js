var fs = require('fs');
var http = require('http');
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

function server(request, result) {
    var urlObj = url.parse(request.url, true, false);
    fs.readFile(ROOT_DIR + urlObj.pathname, function(error, page) {
		if (error) {
			returnErrorMessage(result, error);
		} else {
			returnPage(result, page);
    	}
    });
};

http.createServer(server).listen(3030);

