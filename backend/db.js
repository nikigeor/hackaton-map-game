const express = require("express");
const mongoose = require("mongoose");
const questions = require("./models/questions");
const app = express();
const mongoUrl =
  "mongodb+srv://nikigeo:001187198@mapgame.jkgmx.mongodb.net/MapGames";
require("dotenv").config();

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/add-questions", (req, res) => {
  const quest = new questions({
    question: "How are you?",
  });

  quest
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-questions", (req, res) => {
  questions
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-questions", (req, res) => {
  questions
    .findById("60c5a6cd80f92b4b1aa0db7e")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
