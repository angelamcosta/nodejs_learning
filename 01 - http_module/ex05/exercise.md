# Exercise 5: Serving Static Files

## Problem:

Write a program that creates an HTTP server. When a GET request is made to the server with the URL "/static/example.html", read the contents of the "example.html" file and send it as the response.

## Instructions:

- Create a new file named `app.js`.
- In the same dir as your `app.js` create a `public` dir.
- In the `public` dir, create a `index.html` file.
- In your `app.js` file, require the modules `http`, `fs` and `path`.
- Verify if the request url is `/static/example.html`, if it is, return the index.htm, like this:

```JavaScript
if (req.url === '/static/example.html')
{
	const filePath = path.join(__dirname, 'public', 'example.html');
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'text/plain');
			console.log(`Error: ${err}`);
			res.end('Internal Server Error');
		}
		else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
}
```