/**
 * Created by leon on 15-03-01.
 */
var mymodule = require('./mymodule.js');


// var result1 = mymodule(process.argv[2], process.argv[3], function (err,result){
//      if(err){
//         console.log(err);
//     }
//   console.log('blah');
//     result.forEach(function (file){
//         console.log(file);
//     })
// });


mymodule(process.argv[2], process.argv[3], function (err,result){
  if(err){
    console.log(err);
  }

  result.forEach(function (filename){
    console.log(filename);
  })

});