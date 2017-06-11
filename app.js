const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render("index", { title: 'The index page!' });
});

app.post("/counter", urlencodedParser, function(req, res) {
  var text = req.body.textinput;
  res.send('Got a POST request: ' + text)
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
