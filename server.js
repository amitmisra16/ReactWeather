<<<<<<< HEAD
var express = require('express');


var app = express();

app.use(function(req, res, next){
    if( req.headers["x-forwarded-proto"] === 'http' ) {
      next();
    } else {
      res.redirect('http://' + req.hostname + req.url);
    }
});

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
=======
var express = require('express')
var app = express()

app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
>>>>>>> 0a1d5ff5ce29159062efc47ced8a69a4f8414623
})
