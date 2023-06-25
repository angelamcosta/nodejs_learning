# Exercise 8: Error Handling

## Problem:

Write a program that creates an HTTP server. If any error occurs during the request/response cycle, respond with a status code of 500 (Internal Server Error) and print the error message to the console.

# Instructions:

- Create a new file named `app.js`.
- In your `app.js` file, require the module `http`.
- Use a `try ... catch` block to handle requests.
- If the request method is `GET` and the url is `/`, set the response status code to 200.
- Otherwise, treat the request as an error and set the response status code to 500.