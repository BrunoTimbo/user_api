const express = require("express");
const app = express();
const port = 3000;
const users = require("./src/data/users.json");

app.get("/", (req, res) => {
  res.send("Servidor criado!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {

    let idParam = parseInt(req.params.id)

    let userFiltered = users.filter(user => user.id == idParam)

    res.status(200).json(userFiltered);

  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
