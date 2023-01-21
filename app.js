
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workitems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	let today = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};
	let day = today.toLocaleDateString("en-US", options)

	res.render("list", {
		listtitle: day,
		newListItems: items,
	});
});

app.post("/", (req, res) => {
	let item = req.body.newItem;
	if (req.body.list === "Work") {
		workitems.push(item);
		res.redirect("/work");
	}else {
		items.push(item);
		res.redirect("/");
	}
});

app.get("/work", (req,res)=>{
	res.render("list", {
		listtitle: "Work List",
		newListItems: workitems
	});
});

app.post("/work", (req, res)=>{
	let item = req.body.newItem;
	workitems.push(item);
	res.redirect("/work");

});

app.listen(3000, function () {
	console.log("Server started on port 3000.");
});
