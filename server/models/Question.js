const mongoose = require('mongoose')
const modelName = 'Question'

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  choices: [{
    choice: {
      type: String,
      required: true,
    }
  }],
  answer: {
    type: String,
    required: true
  },
  tema: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  video: {
    type: String,
    default: null,
  },
  difficulty: {
    type: Number,
    required: true,
    default: 0
  },
  duration: {
    type: Number,
    required: false
  },
  timestamp: {}
})

module.exports = mongoose.model(modelName, QuestionSchema)