var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

let db;

(async () => {
  try {
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'DogWalkService'
    });

  } catch (err) {
    console.error('Error setting up database. Ensure Mysql is running: service mysql start', err);
  }
})();

router.get('/api/dogs', async function(req, res, next) {
  try {
    const [rows] = await db.execute('SELECT Dogs.name AS dog_name, size, Users.username AS owner_username FROM Dogs JOIN Users ON Users.user_id = Dogs.user_id');
    res.sendStatus(200).json(rows);
    return;
  } catch (error) {
    res.sendStatus(500).json({ error: 'an error occurred' });
    return;
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
