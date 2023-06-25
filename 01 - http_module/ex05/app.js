const fs = require('fs');
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.url === '/static/example.html')
	{
		const filePath = path.join(__dirname, 'public', 'example.html');
		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.setHeader('Content-Type', 'text/plain');
				console.log(`Error: ${err}`);
				res.end('Internal Server Error');
			}
			else {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end(data);
			}
		});
	} else {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello world!');
	}
});

server.listen(port, hostname, () => {
	console.log(`Server is up and running on port ${port}`);
});