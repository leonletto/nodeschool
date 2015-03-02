/**
 * Created by leon on 15-03-01.
 */
var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);