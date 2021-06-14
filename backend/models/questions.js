require('./db')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    city_name: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: [{
      type: String,
      required: true,
    }],
    coordinates: [{
      type: Number,
      required: true,
    }],
  },
  
);

const questions = mongoose.model("questions", questionSchema);
module.exports = questions;
