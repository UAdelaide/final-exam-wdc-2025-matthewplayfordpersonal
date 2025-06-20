const express = require('express');
const router = express.Router();
const db = require('../models/db');

// GET all users (for admin/testing)
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT user_id, username, email, role FROM Users');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// POST a new user (simple signup)
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const [result] = await db.query(`
      INSERT INTO Users (username, email, password_hash, role)
      VALUES (?, ?, ?, ?)
    `, [username, email, password, role]);

    res.status(201).json({ message: 'User registered', user_id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.get('/me', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }
  res.json(req.session.user);
});

// POST login (dummy version)
router.post('/login', async (req, res) => {
  // get the neccessary variables from the request body
  const { username, password } = req.body;

  try {
    // check if matching user exists
    const [rows] = await db.query(`
      SELECT user_id, username, role FROM Users
      WHERE username = ? AND password_hash = ?
    `, [username, password]);

    // if one does not, return 401
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // create session for user and keep track of their user_id
    req.session.user_id = rows[0].user_id;

    // if one does, return success
    res.json({ message: 'Login successful', user: rows[0] });
  } catch (error) {
    // catch any errors
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

router.post('/logout', async (req, res) => {
  try {
    // attempt to destroy the session
    req.session.destroy((error) => {
      // if there is an error return a 500
      if (error) {
        res.sendStatus(500);
      }

      // clear the cookie and return a 200
      res.clearCookie('connect.sid');
      res.sendStatus(200);
    });
  } catch (error) {
    // catch any errors
    console.error(error);
    res.status(500).json({ error: 'Logout failed' });
  }
});

router.get('/mydogs', async (req, res) => {
  const userId = req.session.user_id;
  if (!userId) return res.status(401).json({ error: 'Not logged in' });

  const [rows] = db.execute()
})

module.exports = router;