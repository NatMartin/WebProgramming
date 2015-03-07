var http = require('http');
var serverModule = require('./lib/server.js');

http.createServer(serverModule.server).listen(3030);
