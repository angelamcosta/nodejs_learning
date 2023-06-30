const fs = require('fs');

fs.readFile('sample.txt', (err, data) => {
	if (err)
		console.log(`Error: ${err}`);
	else
		console.log(`${data}`);
});
