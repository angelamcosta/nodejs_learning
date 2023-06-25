# Exercise 6: Handling Form Submissions

## Problem:

Write a program that creates an HTTP server. When a POST request is made to the server with the URL "/submit", parse the form data sent in the request body and print it to the console.

# Instructions:

- Create a new file named `app.js`.
- In the same dir as your `app.js` create a `public` dir.
- In the `public` dir, create a `index.html` file with a form, like this:

``` html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Form test</title>
	</head>
	<body>
		<form action="/submit" method="POST">
			<label for="fname">First name:</label>
			<br />
			<input type="text" id="fname" name="fname" placeholder="Jane" />
			<br />
			<label for="lname">Last name:</label><br />
			<input type="text" id="lname" name="lname" placeholder="Doe"/>
			<br />
			<br />
			<input type="submit" value="Submit" />
		</form>
	</body>
</html>
```

- In your `app.js` file, require the modules `http`, `fs` and `path`.
- When creating the server, handle the POST request. Make sure to verify the if the request url is `/submit` too.
- Use the `URLSearchParams` to handle the form data, like this:

``` JavaScript
req.on('end', () => {
	const parsedFormData = new URLSearchParams(formData);

	const firstName = parsedFormData.get('fname');
	const lastName = parsedFormData.get('lname');

	console.log(`Data reiceved: ${firstName} ${lastName}`);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Form submitted!');
});
```
