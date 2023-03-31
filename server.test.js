const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

server.on("request", (request, response) => {
  console.log("Request received");
  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    console.log("Hello World");
  }
});

http.get("http://localhost:3000", (response) => {
  if (response.statusCode === 200) {
    console.log("Server runs properly");
  } else {
    console.log("Server has a problem");
  }
});

server.on("close", () => {
  console.log("Server is closed");
});
