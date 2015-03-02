/**
 * Created by leon on 15-03-01.
 */
var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var map = require("through2-map");

var upper = map(function(chunk){
  var blah=chunk.toString();
  console.log(blah);
  return blah.toUpperCase();
})

var server = http.createServer(function (req, res) {
  req.pipe(upper).pipe(res);
})



server.listen(port);