const { check, validationResult } = require("express-validator");
const express = require("express");
const path = require("path");
var myApp = express();
myApp.use(express.static("static"));
myApp.use(express.urlencoded({ extended: false }));
myApp.set("views", path.join(__dirname, "views"));
myApp.set("view engine", "ejs");
myApp.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "/pages/index.html"));
  res.render("home");
});
// myApp.get("/contact", function (req, res) {
//   res.sendFile(path.join(__dirname, "/pages/contact.html"));
// });

myApp.post(
  "/contact",
  [
    check("name", "muat have name").notEmpty(),
    check("email", "must have email").isEmail(),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("contact", { errors: errors.array() });
    } else {
      var name = req.body.name;
      var email = req.body.email;
      res.render("contactThanks", { name: name, email: email });
    }
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
myApp.listen(8084);
console.log("Everthing executed fine.. Open http://localhost:8084/");
