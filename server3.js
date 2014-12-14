var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html/";
http.createServer(function (req, res) {
    console.log(req.method + ": " + req.url);
    var urlObj = url.parse(req.url, true, false);
    if (req.method == 'GET') {
	console.log('Handeling GET request');
	if (urlObj.search == '') {
	    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
		if (err) {
		    res.writeHead(404);
		    res.end(JSON.stringify(err));
		    console.log("404: " + JSON.stringify(err));
		    return;
		}
		res.writeHead(200);
		res.end(data);
		console.log("200: " + ROOT_DIR + urlObj.pathname);
	    });
	}
    }
    else if (req.method == 'PUT') {
	console.log('Handeling PUT request');
    }
    else if (req.method == 'POST') {
	colsole.log('Handeling POST request');
    }
}).listen(3030);


