/* eslint-disable no-console */
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
app.use('/', cookie);

let tasks = [
  {
    'title': 'Math homework',
    'author': 'John Doe',
  },
  {
    'title': 'English homework',
    'author': 'Jane Smith',
  },
];

app.get('/tasks', cookie, (req, res) => {
  if (req.session.email) {
    res.status(200).send(tasks);
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
    res.status(201).send(tasks);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/tasks/:id', (req, res) => {
  if (req.session.email) {
    const task = tasks.find((t) => t.id === req.params.id);
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(404).send('Task not found');
    }
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.patch('/tasks/:id', (req, res) => {
  if (req.session.email) {
    const keys = Object.keys(req.body);
    const currentTask = tasks.find((t) => t.id === req.params.id);
    if (currentTask && keys.length > 0) {
      keys.forEach((key) => (currentTask[key] = req.body[key]));
      tasks = tasks.map((t) => (t.id === req.params.id ? currentTask : t));
      res.status(200).send(tasks);
    } else {
      res.status(404).send('Task not found');
    }
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.delete('/tasks/:id', (req, res) => {
  if (req.session.email) {
    const returnedTask = tasks.find((t) => t.id === req.params.id);
    if (returnedTask) {
      returnedTask['finished_at'] = new Date().toISOString();
      res.status(204).send(tasks);
    } else {
      res.status(404).send('Task not found');
    }
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
