var rpio = require('rpio');
var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);

server.get('/garage/activate', (req, res) => {
  res.send('Garage Door Activated');
});

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});