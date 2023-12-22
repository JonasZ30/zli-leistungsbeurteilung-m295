const express = require('express')
const session = require("express-session")
const { randomUUID } = require('node:crypto');
const app = express()
const port = 4040;

let tasks = {} 

app.get("/tasks", (req,res) => {
    res.status(201).send(tasks)
})

app.post("/tasks", (req,res) => {
    const newTask = req.body;
    tasks.push(req.body);
    res.status(201).send(tasks)
})

app.get("/tasks/:id", (req,res) => {
    const task = tasks.find((task) => task.id === req.params.id)
    res.status(200).send(task)
})

app.patch("/tasks/:id", (req,res) => {
    const keys = Object.keys(req.body);
    const currentTask = tasks.find((task) => task.isbn === req.params.id );
    keys.forEach((key) => currentTask[key] = req.body[key]);
    tasks = tasks.map((task) => task.id === req.params.id ? currentTask : task);
    res.send(tasks);
})

app.delete("/tasks/:id", (req,res) => {
    const task = tasks.filter((task) => task.id !== req.params.id);
    res.send(task)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })