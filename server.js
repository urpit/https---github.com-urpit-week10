const express = require("express");
const path = require("path");
var myApp = express();
myApp.use(express.static("static"));
myApp.set("views", path.join(__dirname, "views"));
myApp.set("view engine", "ejs");
myApp.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "/pages/index.html"));
  res.render("home");
});
myApp.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/contact.html"));
});
myApp.get("/about", function (req, res) {
  // res.sendFile(path.join(__dirname, "/pages/about.html"));
  res.render("about");
});
myApp.get("/help", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/help.html"));
});
myApp.listen(8083);
console.log("Everthing executed fine.. Open http://localhost:8083/");
