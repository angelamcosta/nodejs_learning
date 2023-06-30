const fs = require('fs');

fs.rm('renamed.txt', (err) => {
	if (err) console.log(`Error: ${err}`);
});
