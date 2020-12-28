var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
  res.send('login');
  res.end();
});

router.get('/login', (req, res, next) => {
  res.render('login');
  res.end();
});

module.exports = router;