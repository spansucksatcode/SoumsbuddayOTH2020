var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/surprise", function (req, res) {
    res.render("easteregg");
})

app.get("/fool", function (req, res) {
    res.render("spanishinquisition");
})

app.listen(8080, function (req, res) {
    console.log("Listening at port 8080.");
})