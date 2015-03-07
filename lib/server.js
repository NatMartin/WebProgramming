exports = module.exports = {};

var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";
var blogPosts = [];

function returnErrorMessage(result, error) {
	result.writeHead(404);
	result.end(JSON.stringify(error));
};

function returnPage(result, page) {
	result.writeHead(200);
	result.end(page);	
};

function returnBlog(result, page) {
    blogPosts = page;
    fs.readFile(ROOT_DIR + "templates/blogTemplate.js", function(error, blogTemplate) {
        if (error) {
            returnErrorMessage(result, error);
        } else {
            returnPage(result, "var posts = " + blogPosts +";\n" + blogTemplate);
        };
    });
};

exports.server = function(request, result) {
    var urlObj = url.parse(request.url, true, false);
    console.log(request.url);
    fs.readFile(ROOT_DIR + urlObj.pathname, function(error, page) {
		if (error) {
			returnErrorMessage(result, error);
    	} else if (request.url === "js/blog.js") {
            returnBlog(result, page);
        } else {
    		returnPage(result, page);
    	}
    });
};
