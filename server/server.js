var express = require("express");
var cors = require("cors");
var createError = require("http-errors");
var path = require("path");

var app = express();

var indexRouter = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;