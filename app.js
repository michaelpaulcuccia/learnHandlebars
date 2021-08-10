const express = require("express");
const exphbs = require("express-handlebars");
const ktData = require('./data/ktData.js');
const doseCardData = require('./data/dosingCard.js');

const app = express();

//CSS
app.use(express.static("public"));

//Images
app.use(express.static("views/images")); 

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home", { title: "Home" });
});

app.get("/dosing", function (req, res) {
  res.render("dosing", {title: 'Dosing', data: doseCardData});
});

app.get("/efficacy", function (req, res) {
  res.render("efficacy", {title: 'Efficacy'});
});

app.get("/safety", function (req, res) {
  res.render("safety", {title: 'Safety', data: ktData});
});

//TESTING ROUTES

app.get("/helpers", function (req, res) {
  res.render("helpers", {
    title: "About",
    name: "Michael-Paul Cuccia",
    boolVal: true,
    otherBoolVal: false,
    arr: ["react", "next", "gatsby", "handlebars", "javascript"],
    data: {
      machine: "MacBook",
      size: 13,
      doYouLike: true,
    },
    list: [{ items: ["cat", "hat", "bat"] }, { items: ["car", "bar", "far"] }],
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});
