/* eslint-disable quote-props */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-return-assign */
/* eslint-disable dot-notation */
const express = require('express');
const { randomUUID } = require('node:crypto');
const cookie = require('./authentication');

const app = express();
const port = 4041;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  '/',
  cookie,
);

let tasks = [
  {
    'title': 'Math homework',
    'author': 'John Doe',
  },
  {
    'title': 'English homework',
    'author': 'Jane Smith',
  },
  {
    'title': 'Learn JavaScript',
    'author': 'Bob Johnson',
  },
];

app.get('/tasks', cookie, (req, res) => {
  if (req.session.email) {
    res.status(201).send(tasks);
  } else {
    res.status(401).send('Unauthorized');
  }
});

const date = new Date();
date.setHours(date.getHours() + 1);

app.post('/tasks', cookie, (req, res) => {
  if (req.session.email) {
    const newTask = req.body;
    newTask['id'] = randomUUID();
    newTask['created_at'] = date.toISOString();
    newTask['finished_at'] = null;
    tasks = [...tasks, req.body];
    res.status(500).send(tasks);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/tasks/:id', cookie, (req, res) => {
  if (req.session.email) {
    // eslint-disable-next-line no-shadow
    const task = tasks.find((task) => task.id === req.params.id);
    res.status(200).send(task);
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Übernommen von einem alten Auftrag
app.patch('/tasks/:id', cookie, (req, res) => {
  if (req.session.email) {
    const keys = Object.keys(req.body);
    const currentTask = tasks.find((task) => task.id === req.params.id);
    keys.forEach((key) => currentTask[key] = req.body[key]);
    tasks = tasks.map((task) => task.id === req.params.id ? currentTask : task);
    res.send(tasks);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.delete('/tasks/:id', cookie, (req, res) => {
  if (req.session.email) {
    const returnedtask = tasks.find((task) => task.id === req.params.id);
    returnedtask['finished_at'] = new Date().toISOString();
    res.status(500).send(tasks);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
