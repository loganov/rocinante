/*
Simple express aplication for deploying to target server, ganymede.
*/
var express = require('express')
var app = express()

app.get('/', function (request, response) {
  response.send('Wrong URL! Try /hello.')
})

app.get('/hello', function (request, response) {
  response.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Sample application for ganymede.');
  console.log('Listening on port 3000');
})

process.on('SIGINT', function() {
  console.log('Exiting...');
  process.exit();
});
