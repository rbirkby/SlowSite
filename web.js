var express = require('express')
var app = express()

var connections = 0;

app.get('/:delay', function (req, res) {
  connections++;

  setTimeout(function() {
    res.send('<html><body>Delayed for ' + req.params.delay + 'ms before responding</body></html>');
    connections--;
  }, req.params.delay);
})

app.get('/', function (req, res) {
  res.send('<html><body>Pass a delay in milliseconds on the URL. eg <a href="http://slowsite.herokuapp.com/1234">http://slowsite.herokuapp.com/1234</a></body></html>');
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

setInterval(function() {
  console.log('Number of connections: ', connections);
}, 1000);
