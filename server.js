// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //TODO: allows static service

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var ctlr = require("./controllers/burgers_controllers");
//app.use("/", ctlr);
app.use(ctlr);

// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
