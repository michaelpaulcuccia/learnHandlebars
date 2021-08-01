const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.static("public"));

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

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});
