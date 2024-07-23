const express = require('express');
const router = express.Router();
const data = require('../data/dummyData');

// GET /api/users
router.get('/users', (req, res) => {
  res.json(data.users);
});

// GET /api/user_accounts
router.get('/user_accounts', (req, res) => {
  res.json(data.user_accounts);
});

// GET /api/account_types
router.get('/account_types', (req, res) => {
  res.json(data.account_types);
});

// GET /api/login_infos
router.get('/login_infos', (req, res) => {
  res.json(data.login_infos);
});

// GET /api/transactions
router.get('/transactions', (req, res) => {
  res.json(data.transactions);
});

module.exports = router;
