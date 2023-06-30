const fs = require('fs');

fs.readdir('mydir', (err, files) => {
	if (err) console.log(`Error: ${err}`);
	else console.log(`Files: ${files}`);
});
