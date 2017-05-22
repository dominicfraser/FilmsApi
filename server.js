var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));

var controller = require('./controllers/index.js');
app.use(controller);

//if client/build is above use(controller) then it just builds whatever is in index.html in build as default / route

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
