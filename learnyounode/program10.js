/**
 * Created by leon on 15-03-01.
 */
var net = require('net')
var port = process.argv[2];
var date = new Date();

var datefill = function(datetime){
  if (datetime<10){
    return "0"+datetime;
  }else{
    return datetime;
  }
}

var year = date.getFullYear();
var month = datefill(date.getMonth()+1);
var day = datefill(date.getDay()+1);
var hours = datefill(date.getHours());
var minutes = datefill(date.getMinutes());

var curtime = year+'-'+month+'-'+day+' '+hours+':'+minutes;


var server = net.createServer(function (socket) {
  socket.end(curtime+'\n');
})

server.listen(port)