var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1337);

function doRequest(req, res) {
	var url = req.url;
	console.log(url);
	if ('/' == url) {
		fs.readFile('./index.html', 'UTF-8', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
	} else if ('/main.js' == url) {
		fs.readFile('./main.js', 'UTF-8', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(data);
			res.end();
		});
	} else if ('/style.css' == url) {
			fs.readFile('./main.js', 'UTF-8', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(data);
			res.end();
		});
	}
}
console.log('Server running at http://127.0.0.1:1337/');