const mongoose = require('mongoose')
const modelName = 'Question'

const QuestionSchema = new mongoose.Schema({
  test: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  choices: [{
    type: String,
    default: '',
  }],
  answer: {
    type: Number,
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
    default: '',
  },
  difficulty: {
    type: Number,
    default: 0
  },
  killertest: {
    type: Boolean,
    default: false,
  },
  gemela: {
    type: Boolean,
    default: false,
  },
  newpregunta: {
    type: Boolean,
    default: false
  },
  timestamp: {}
})

module.exports = mongoose.model(modelName, QuestionSchema)