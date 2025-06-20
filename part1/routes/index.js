var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/dogs', function(req, res, next) {
  try {
    
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/api/open', function(req, res, next) {
  try {

  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/api/summary', function(req, res, next) {
  try {

  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
