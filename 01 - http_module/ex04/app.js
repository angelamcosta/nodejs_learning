const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.headers.authorization) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		console.log('Authorized request.');
		res.end('Hello, World!');
	}
	else {
		res.statusCode = 401;
		res.setHeader('Content-Type', 'text/plain');
		console.log('Unauthorized request.');
		res.end('Access denied');
	}	
});

server.listen(port, hostname, () => {
	console.log(`Server is up and running on port ${port}`);
});