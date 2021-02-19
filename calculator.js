const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2;
  res.send("Thanks for being a whole idiot.  The sum is " + sum);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
