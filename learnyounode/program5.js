/**
 * Created by leon on 15-03-01.
 */
var fs = require('fs');

fs.readdir(process.argv[2], function (err, filelist){
  if (err) throw err;

  var extension = process.argv[3];



  var elength = extension.length;
  for (var x = 0; x < filelist.length; x++){
    var filename = filelist[x];

    if (filename.substr(filename.length - elength-1, elength+1) === '.' + extension) {
      console.log(filename);
    }
  }

})

// better answer
//var path = require('path')
//fs.readdir(process.argv[2], function (err, list) {
//  if (err) throw err;
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
//})