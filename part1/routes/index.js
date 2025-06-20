var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

let db;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/dogs', function(req, res, next) {
  try {

  } catch (error) {
    res.sendStatus(500).json({ error: 'an error occurred' });
  }
});

router.get('/api/open', function(req, res, next) {
  try {

  } catch (error) {
    res.sendStatus(500).json({ error: 'an error occurred' });
  }
});

router.get('/api/summary', function(req, res, next) {
  try {

  } catch (error) {
    res.sendStatus(500).json({ error: 'an error occurred' });
  }
});

module.exports = router;
