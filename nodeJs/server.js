const express = require("express");
const app = express();
app.use(express.static("ZDsite"));
app.get("/")
app.listen(8080);
console.log("Server started")