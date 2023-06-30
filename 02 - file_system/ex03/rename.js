const fs = require('fs');

fs.rename('original.txt', 'renamed.txt', (err) => {
	if (err) console.log(`Error: ${err}`);
});
