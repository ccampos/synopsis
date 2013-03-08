var server = require('./server'),
	os = require('os');

server.start();

console.log('server started');
console.log('os:', os.networkInterfaces());