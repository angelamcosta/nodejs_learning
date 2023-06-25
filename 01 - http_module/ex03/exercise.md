# Exercise 3: Handling Request Parameters

## Problem:

Write a program that creates an HTTP server. When a GET request is made to the server with the URL "/?name=John", respond with a message that says "Hello, John!" Replace "John" with the actual value provided in the request query parameter.

## Instructions:

- Create a new file named `app.js`.
- In your `app.js` file, require the module `http`.
- You will also need to require the module `url`.
- Then, retrieve the name from the url, if there is any.

``` JavaScript
const parsedUrl = url.parse(req.url, true);
const name = parsedUrl.query.name || 'Anonymous';
```
- And respond the request with a message that says `Hello, <name>`.