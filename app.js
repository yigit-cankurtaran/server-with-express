const express = require("express");

const app = express();

app.use((request, response) => {
  response.json({ message: "Hello World!" });
});

module.exports = app;
