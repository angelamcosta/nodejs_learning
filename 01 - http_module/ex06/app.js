const fs = require('fs');
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.method === 'POST' && req.url === '/submit') {
		let formData = '';

		req.on('data', (chunk) => {
			formData += chunk;
		});

		req.on('end', () => {
			const parsedFormData = new URLSearchParams(formData);

			const firstName = parsedFormData.get('fname');
			const lastName = parsedFormData.get('lname');

			console.log(`Data reiceved: ${firstName} ${lastName}`);

			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Form submitted!');
		});
	} else {
		const pathDir = path.join(__dirname, 'public', 'index.html');
		fs.readFile(pathDir, (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.setHeader('Content-Type', 'text/plain');
				res.end('Server error');
			} else {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end(data);
			}
		});
	}
});

server.listen(port, hostname, () => {
	console.log(`Server is up and running on port ${port}`);
});