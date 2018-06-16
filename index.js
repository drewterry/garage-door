var rpio = require('rpio');
var server = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});