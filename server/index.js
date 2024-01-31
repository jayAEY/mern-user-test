const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017");

app.post("/signup", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    user
      ? user.password === password
        ? res.json("Success")
        : res.json("Incorrect Password")
      : res.json("No User Exists");
  });
});

app.listen(3001, () => {
  console.log("server connected");
});
