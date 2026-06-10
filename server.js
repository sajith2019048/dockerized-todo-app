const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [
  { id: 1, task: "Learn Docker", completed: false },
  { id: 2, task: "Build DevOps project", completed: false }
];

app.get("/", (req, res) => {
  res.send("Dockerized Todo API is running!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});