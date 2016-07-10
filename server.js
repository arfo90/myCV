var http = require('http');

var express = require("express");
var app = express();

// //Lets define a port we want to listen to
// const PORT=8080; 

// //We need a function which handles requests and send response
// function handleRequest(request, response){
//     request.render('about.html');
//     response.end('It Works!! Path Hit: ' + request.url);
// }

// //Create a server
// var server = http.createServer(handleRequest);

// //Lets start our server
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

   app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render(index);
});
console.log('Booting..');
console.log('Here we go..');
console.log('Server is Started');

app.listen(5000, '127.0.0.1')