const fs = require('fs');

const file = 'text.txt';

fs.stat(file, (error, stats) => {
	if (error) console.log(`Error: ${err}`);
	else console.log(stats);
});
