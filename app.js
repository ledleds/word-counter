const express = require("express"),
      bodyParser = require("body-parser"),
      multer = require("multer"),
      WordCounter = require("./src/word_count"),
      FileInput = require("./src/file_input"),
      fileInput = new FileInput(),
      app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var upload = multer({ dest: __dirname + "/./public/uploads/",
                      limits: {fileSize: 1000000, files:1} })

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index", { title: "The index page!" });
});

app.post("/upload", upload.single("textFile"), function(req, res) {
  var file = req.file.path;
  var preparedFile = fileInput.prepareFile(file);
  console.log(preparedFile)
  wordCounter = new WordCounter(preparedFile);
  res.render('result', { message: wordCounter.countIndividialWords(), wordCounter: wordCounter});
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
