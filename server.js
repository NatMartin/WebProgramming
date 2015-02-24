var http = require('http');
var server = require('./lib/server.js');

http.createServer(server.server).listen(3030);
