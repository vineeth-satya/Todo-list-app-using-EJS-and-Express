
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
	let today = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};
	let day = today.toLocaleDateString("en-US", options)

	res.render("list", {
		kindofDay: day,
		newListItems: items
	});
});

app.post("/", (req, res) => {
	let item = req.body.newItem;
	items.push(item);
	res.redirect("/");
});

app.listen(3000, function () {
	console.log("Server started on port 3000.");
});
