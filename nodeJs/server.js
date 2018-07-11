const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("public"));
app.get("/");
require('./app/routes')(app, fs);
app.listen(8080);
console.log("Server started");