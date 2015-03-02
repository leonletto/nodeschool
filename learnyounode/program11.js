/**
 * Created by leon on 15-03-01.
 */
var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var filename = process.argv[3];
var sourcefile = fs.createReadStream(filename);


var server = http.createServer(function (req, res) {
  sourcefile.pipe(res);
})



server.listen(port);