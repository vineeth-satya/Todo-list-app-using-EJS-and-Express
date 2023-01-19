//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
