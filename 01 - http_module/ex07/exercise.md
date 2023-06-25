# Exercise 7: Handling JSON Data

## Problem:

Write a program that creates an HTTP server. When a POST request is made to the server with the URL "/data", the server expects a JSON payload in the request body. The JSON payload should contain two properties: "num1" and "num2", both representing numeric values.

Upon receiving the request, the server will parse the JSON data. If the JSON data is valid and contains the required properties, the server will multiply the values of "num1" and "num2" together to calculate the result.

The server will then send the result as the response with a status code of 200 and a plain text content type. If the JSON data is invalid or if the required properties are missing, appropriate error responses will be sent with the corresponding status codes and error messages.

To use this program, make a POST request to the URL "/data" with the following JSON payload in the request body:

```JSON
{
  "num1": 4,
  "num2": 5
}
```

The server will respond with:

`The result is: 20`

Make sure to adjust the URL, payload, and expected response format as needed.

# Instructions:

- Create a new file named `app.js`.
- In your `app.js` file, require the module `http`.
- Verify if the request method is `POST` and if the url is `/data`, if it is, handle the JSON data, like this:

```JavaScript
req.on('end', () => {
try {
	const jsonData = JSON.parse(requestData);

	if (jsonData.hasOwnProperty('num1') && jsonData.hasOwnProperty('num2'))
	{
		const num1 = jsonData.num1;
		const num2 = jsonData.num2;

		console.log(`${num1} * ${num2} = ${num1 * num2}`);

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end(`${num1} * ${num2} = ${num1 * num2}`);
	} else {
		res.statusCode = 400;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Invalid JSON data.');
	}
} catch (error) {
	res.statusCode = 400;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Invalid JSON data.');
	}
});
```
