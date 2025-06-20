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
    const [rows] = await db.execute('SELECT Dogs.name AS dog_name, size, Users.username AS owner_username FROM Dogs JOIN Users ON Users.user_id = Dogs.owner_id');
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.json({ error: 'an error occurred' });
  }
});

router.get('/api/open', async function(req, res, next) {
  try {
    const [rows] = await db.execute(`SELECT WalkRequests.request_id, Dogs.name AS dog_name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username FROM WalkRequests JOIN Dogs ON Dogs.dog_id = WalkRequests.dog_id JOIN Users ON Users.user_id = Dogs.owner_id WHERE WalkRequests.status = 'open'`);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.json({ error: 'an error occurred' });
  }
});

router.get('/api/summary', function(req, res, next) {
  try {
    const [rows] = await db.execute(`SELECT Users.username as walker_username, Count(WalkApplications.application_id), `)
  } catch (error) {
    console.log(error);
    res.json({ error: 'an error occurred' });
  }
});

module.exports = router;
