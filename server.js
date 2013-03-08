// following tutorial: http://www.nodebeginner.org/

// example of json transfer: http://oranlooney.com/json-round-trip/

var http = require('http'),
	js = {message: "Hello W!"},
	html = '<html><head><script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script></head><body></body></html>';



function start() {
	function onRequest(req, resp) {
		console.log('Request received.');
		resp.writeHead(200, {'Content-Type': 'text/html'});
		resp.write(html);
		resp.end();
		if ( req.method === 'GET') {
			console.log('GET');
		};
	};	

	http.createServer(onRequest).listen(8124);
};

exports.start = start;

			// resp.writeHead(200, {'Content-Type': 'application/json'});
			// resp.write(JSON.stringify(js));

function get(id, callback) {
	$.ajax('http://localhost:8124/' + id + '/', {
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			console.log('success');
		},
		error: function(e) {
			console.log('error', e.message);
		}
	});
};