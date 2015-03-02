/**
 * Created by leon on 15-03-01.
 */
var http = require("http");

var myurl = process.argv[2];

http.get(myurl, function(res) {
  //console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(f){
    console.log(f);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});