var express = require('express');
var moviesCtrl = require("./controllers/movies");
var app = express();

app.set("view engine", "ejs");

app.use("/movies", moviesCtrl);

app.get("/", function(req, res) {
  res.render("index");
});

// app.get("/movies", function(req, res) {
//   res.render("index");
// })

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on 3000 baby!!!");
})


