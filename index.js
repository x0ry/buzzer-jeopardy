var app = require('express')();
//var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serveStatic = serveStatic = require('serve-static');
var activeteam = 0;
app.use(serveStatic('./files'));
app.use(serveStatic('./files/css'));
app.use(serveStatic('./files/js'));
app.use(serveStatic('./files/img'));
app.use(serveStatic('./files/fonts'));//'/cssFiles/',require('express')().static(__dirname + '/files'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/buzzer', function(req, res){
  res.sendFile(__dirname + '/files/buzzer.html');
});

io.on('connection', function(socket){
	if((activeteam <= 11)){
		io.emit('setteam',activeteam);
		activeteam++
		}
	else {activeteam = 0;}
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});
