var http = require('http'),
	host = '127.0.0.1',
	port = '9990';
	
var server = http.createServer(function(request , response){
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<h1>Hello World!</h1>');
}).listen(port, host, function(){
	console.log("server running on http://" + host + ":" +  port);
})