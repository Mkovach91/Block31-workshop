// TODO: this file :)
const express = require("express");
const app = express();

const PORT = 3000;
const employees = require("./employees")

app.get("/", (req, res) => {
  res.send("Hello Employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;  
  const employee = employees.find(emp => emp.id === +id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("employee not found");
  }
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees.find(randomIndex);
  res.json(randomEmployee);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});