const mongoose = require('mongoose')
const modelName = 'User'

const QuestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: ''
  },
},
 {
    timestamps: true,
  }
)

module.exports = mongoose.model(modelName, QuestionSchema)