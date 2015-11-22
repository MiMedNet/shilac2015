var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render("index");
});

app.get('/data', function (req, res) {
 var data = require('./public/SHILAC.json');
 res.send(data);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});	