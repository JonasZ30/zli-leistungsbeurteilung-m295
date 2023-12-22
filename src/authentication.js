/* eslint-disable import/no-extraneous-dependencies */
const session = require('express-session');
const express = require('express');
const emailValidator = require('deep-email-validator');

const router = express.Router();

router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

async function isEmailValid(email) {
  return emailValidator.validate(email);
}

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).send({
      message: 'Email or password missing.',
    });
  }
  if (password !== 'm295') {
    return res.status(401).send({
      message: 'Invalid password.',
    });
  }

  const { valid, reason, validators } = await isEmailValid(email);

  if (valid) return res.status(200).send('Login successful!');

  return res.status(401).send({
    message: 'Please provide a valid email address.',
    reason: validators[reason].reason,
  });
});

router.get('/verify', (req, res) => {
  if (req.session.email) {
    return res.status(200).send({ email: req.session.email });
  }
  return res.status(401).send('Verify failed!');
});

router.delete('/logout', (req, res) => {
  if (req.session.email) {
    req.session.email = null;
    return res.status(204).send();
  }
  return res.status(401).send('Fehler beim Abmelden!');
});

module.exports = router;
