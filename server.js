// following tutorial: http://www.nodebeginner.org/

var http = require('http');

function start() {
	function onRequest(req, resp) {
		console.log('Request received.');
		resp.writeHead(200, {'Content-Type': 'text/plain'});
		resp.write('Hello World');
		resp.end();
	};	

	http.createServer(onRequest).listen(8124);

	console.log('Server has started.');
};

exports.start = start;