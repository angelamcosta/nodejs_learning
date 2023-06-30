const fs = require('fs');

const file = 'check.txt';

fs.access(file, (err) => {
	if (err) console.log(`The file ${file} doesn't exist`);
	else console.log(`The file ${file} exists`);
});
