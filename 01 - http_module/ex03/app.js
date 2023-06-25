const url = require('url');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);
	const name = parsedUrl.query.name || 'Anonymous';

	res.statusCode = 200;
	res.setHeader('Content-Tyoe', 'text/plain');
	res.end(`Hello ${name}!`);
});

server.listen(port, hostname, () => {
	console.log(`Server is up and running on port ${port}`);
});