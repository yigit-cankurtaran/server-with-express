const http = require("http");
const express = require("express");

const server = http.createServer((request, response) => {
  response.end("Hello World");
});
server.listen(3000);

// displays "Hello World" in the browser
