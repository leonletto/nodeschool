/**
 * Created by leon on 15-03-01.
 */
var fs = require('fs');
var path = require('path');


module.exports = function (dir, extension, callback) {
  var listing = [];
  fs.readdir(dir, function (err, filelist) {

    if (err) {return callback(err);}
    filelist.forEach(function (file) {
      if (path.extname(file) === '.' + extension)
        listing.push(file);
    })

    callback(null, listing);
  })



}