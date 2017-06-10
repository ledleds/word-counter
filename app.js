const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render("index", { title: 'The index page!' });
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
