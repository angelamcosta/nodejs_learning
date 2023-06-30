const fs = require('fs');

fs.readFile('data.json', (err, data) => {
	if (err) console.log(`Error: ${err}`);
	else console.log(JSON.parse(data));
});
