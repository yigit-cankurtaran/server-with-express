const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello World");
});
server.listen(3000);

// loading indefinitely. means it's working.
