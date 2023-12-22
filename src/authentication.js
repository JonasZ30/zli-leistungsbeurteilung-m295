const session = require('express-session');
const express = require('express');

const router = express.Router();

router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

const login = {
  email: 'desk@library.example',
  password: 'm295',
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email?.toLowerCase() === login.email && password === login.password) {
    req.session.email = email;
    return res.status(200).send('Login successful!');
  }
  return res.status(401).send('Invalid credentials!');
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
