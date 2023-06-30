const fs = require('fs');

const reader = fs.createReadStream('large.txt');
let writer = fs.createWriteStream('copy.txt');

reader.on('data', (chunk) => {
	const data = chunk.toString();
	console.log(data);
	writer.write(data);
});
