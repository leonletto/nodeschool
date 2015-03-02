/**
 * Created by leon on 15-03-01.
 */
var sumcount = function (){
  var sums = 0;
  for (var count = 2; count < process.argv.length; count++) {
    sums = sums + +process.argv[count];
  }
  return sums;
};

console.log(sumcount());