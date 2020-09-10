const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';


router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

const port = process.env.port || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 5000!')
})