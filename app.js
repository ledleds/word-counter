const express = require('express'),
      bodyParser = require('body-parser'),
      multer = require('multer'),
      app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var upload = multer({ dest: __dirname + '/./public/uploads/' })

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index", { title: "The index page!" });
});

app.post("/upload", upload.single("textFile"), function(req, res) {
    res.send('Got a POST request: ')
    console.log(req.files)
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
