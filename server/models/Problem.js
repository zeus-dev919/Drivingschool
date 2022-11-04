const mongoose = require('mongoose')
const modelName = 'Problem'

const ProblemSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  answers: [{
    answer: {
      type: String,
      required: true,
    },
    isTrue: {
      type: Boolean,
    }
  }],
  tab: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  videos: {
    type: String,
    default: null,
  },
  difficulty: {
    type: Number,
    required: true,
    default: 0
  },
  timestamp: {}
})

module.exports = mongoose.model(modelName, ProblemSchema)