# Exercise 2: Making an HTTP POST Request

## Problem:

Write a program that makes an HTTP POST request to the same URL mentioned in Exercise 1. Send a JSON payload with a title and body, and print the response data to the console.

## Instructions:

- Create a new file named `app.js`.
- In your `app.js` file, require the module `http`.
- Create a `const` to hold the options for your request (don't forget to add the headers).
- Create a `const` to hold your payload data, like this:

``` JavaScript
const postData = JSON.stringify({
	title: 'Example Title',
	body: 'Example Body'
});
```

- Use the `http.request` to make the `POST` request.
- Write your `postData` to your request.
- Log the results.