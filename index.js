var rpio = require('rpio');
var restify = require('restify');

const CONTROL_DELAY = 250;
const CONTROL_PIN = 11;

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);

server.get('/garage/activate', (req, res) => {
  console.log(`Activated by ${req.connection.remoteAddress}`);
  rpio.write(CONTROL_PIN, rpio.HIGH);
  rpio.msleep(CONTROL_DELAY);
  rpio.write(CONTROL_PIN, rpio.LOW);
  res.send('Garage Door Activated');
});

rpio.open(CONTROL_PIN, rpio.OUTPUT);

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});