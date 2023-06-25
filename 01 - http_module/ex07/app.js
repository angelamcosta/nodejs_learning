const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.method === 'POST' && req.url === '/data') {
		let requestData = '';

		req.on('data', (chunk) => {
			requestData += chunk;
		});

		req.on('end', () => {
			try {
				const jsonData = JSON.parse(requestData);

				if (jsonData.hasOwnProperty('num1') && jsonData.hasOwnProperty('num2'))
				{
					const num1 = jsonData.num1;
					const num2 = jsonData.num2;

					console.log(`${num1} * ${num2} = ${num1 * num2}`);

					res.statusCode = 200;
					res.setHeader('Content-Type', 'text/plain');
					res.end(`${num1} * ${num2} = ${num1 * num2}`);
				} else {
					res.statusCode = 400;
					res.setHeader('Content-Type', 'text/plain');
					res.end('Invalid JSON data.');
				}
			} catch (error) {
				res.statusCode = 400;
				res.setHeader('Content-Type', 'text/plain');
				res.end('Invalid JSON data.');
			}
		});
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Not found.');
	}
});

server.listen(port, hostname, () => {
	console.log(`Server is up and running on port ${port}`);
});