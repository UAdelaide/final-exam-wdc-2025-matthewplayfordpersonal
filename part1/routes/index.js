var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

let db;

(async () => {
  try {
    // Connect to MySQL without specifying a database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '' // Set your MySQL root password
    });

    // Create the database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS part1');
    await connection.end();

    // Now connect to the created database
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'part1'
    });

  } catch (err) {
    console.error('Error setting up database. Ensure Mysql is running: service mysql start', err);
  }
})();

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
