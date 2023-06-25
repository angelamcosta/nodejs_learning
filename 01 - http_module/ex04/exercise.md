# Exercise 4: Handling Request Headers

## Problem:

Create an HTTP server using the http module that checks for the presence of the authorization header in the request. If the header is present, respond with a message indicating an authorized request. If the header is not present, respond with a status code of 401 (Unauthorized).

## Instructions:

- Create a new file named `app.js`.
- In your `app.js` file, require the module `http`.
- Then, verify if the authorization header is present on the request and manage the request accordingly.

``` JavaScript
if (req.headers.authorization) {
	res.statusCode = 200;
	// manage authorized request
}
else {
	res.statusCode = 401;
	// manage unauthorized request
}
```