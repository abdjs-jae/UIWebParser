var express = require('express');
var browserSync = require('browser-sync');

var app = express();

app.use(express.static("client"));

var bs = browserSync.create();

bs.init({
  proxy: "localhost:4000",
  files: [ "client/**" ]
});

app.listen(4000, function(){
  console.log("Server started at 4000.");
});
