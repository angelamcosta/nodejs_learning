const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });

const data = prompt('Enter text to be appended: ');

fs.appendFile('out.txt', data, (err) => {
	if (err) console.log(`Error: ${err}`);
});
