const http = require('http');

const options = {
	hostname: 'jsonplaceholder.typicode.com',
	path: '/posts',
	method: 'GET'
};

const req = http.request(options, (res) => {
	let data = '';

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log(JSON.parse(data));
	});
})

req.on('error', (err) => {
	console.log(`Error: ${err}`);
});

req.end();