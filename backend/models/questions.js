const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const questions = mongoose.model("questions", questionSchema);
module.exports = questions;
