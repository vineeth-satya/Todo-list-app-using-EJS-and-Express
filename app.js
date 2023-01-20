
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
	// res.send("Hello");
});

app.listen(3000, function () {
	console.log("Server started on port 3000.");
});
