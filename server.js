const { check, validationResult } = require("express-validator");
const express = require("express");
const path = require("path");
var myApp = express();
myApp.use(express.static("static"));
myApp.set("views", path.join(__dirname, "views"));
myApp.set("view engine", "ejs");
myApp.set(express.urlencoded({ extended: false }));
myApp.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "/pages/index.html"));
  res.render("home");
});
// myApp.get("/contact", function (req, res) {
//   res.sendFile(path.join(__dirname, "/pages/contact.html"));
// });
myApp.post(
  "/",
  [
    check("name", "Must have a name").notEmpty(),
    check("email", "Must have email").isEmail(),
  ],
  function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
  }
);
myApp.get("/about", function (req, res) {
  // res.sendFile(path.join(__dirname, "/pages/about.html"));
  res.render("about");
});
myApp.get("/contact", function (req, res) {
  // res.sendFile(path.join(__dirname, "/pages/help.html"));
  res.render("contact");
});
myApp.listen(8083);
console.log("Everthing executed fine.. Open http://localhost:8083/");
