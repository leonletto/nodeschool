/**
 * Created by leon on 15-03-01.
 */
var fs = require('fs');

//async version first
var countnl = function countnl(data){
  return data.split('\n').length - 1;
};

var doit = function () {
  fs.readFile(process.argv[2], function (err, data){
    if (err) throw err;

    console.log(countnl(data.toString()));

  });
}
//uncomment next line for async version
doit();
//sync version
//console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1)

