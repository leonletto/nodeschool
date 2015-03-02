/**
 * Created by leon on 15-03-01.
 */
var http = require("http");
var bl = require("bl");
var results = [];
var counter = 0;

function printResults () {
  for (var i = 2; i < 5; i++)
    console.log(results[i])
}

var goget = function(theurl){
  http.get(process.argv[theurl], function(res) {
    //console.log("Got response: " + res.statusCode);
    res.pipe(bl(function(err,data){
      if (err) console.log("Got error: " + err.message);

      results[theurl]=data.toString();
      counter++;
      if(counter==3) {printResults();}

    }));

    res.on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  });
}

// goget(process.argv[4],goget(process.argv[3],goget(process.argv[2])));
for (var x = 2; x<5;x++){

  goget(x);
}