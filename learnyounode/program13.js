/**
 * Created by leon on 15-03-01.
 */
var http = require("http");
var url = require("url");

var port = process.argv[2];

var convertdatenormal = function(inputdate){
  var hour = inputdate.getHours();
  var minute = inputdate.getMinutes();
  var second = inputdate.getSeconds();
  var output = {};
  output.hour = hour;
  output.minute = minute;
  output.second = second;
  return output;
}

var convertdateunix = function(inputdate){
  var unixdate = inputdate.getTime();
  var output = {};
  output.unixtime = unixdate;
  return output;
}


var server = http.createServer(function (req, res) {
  var myurl = url.parse(req.url,true)
  var jsonoutput;
  if (myurl.pathname == "/api/parsetime"){
    var inputdate = new Date(myurl.query.iso);
    jsonoutput = JSON.stringify(convertdatenormal(inputdate));
  }else if (myurl.pathname == "/api/unixtime"){
    var inputdate = new Date(myurl.query.iso);
    jsonoutput = JSON.stringify(convertdateunix(inputdate));

  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(jsonoutput + '\n');
  res.end();

})



server.listen(port);