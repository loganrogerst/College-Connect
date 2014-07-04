// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
app.use(express.static(__dirname + '/static'));

app.use(logfmt.requestLogger());

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});