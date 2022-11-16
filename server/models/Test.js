const mongoose = require('mongoose')
const modelName = 'Test'

const TestSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true
  },
  participants: [{
    user: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'attend',
      history: [{
        result: {
          type: String,
          timestamp: {
            type: Date,
            required: true,
            default: new Date(),
          },
        }
      }]
    },
    timestamp: {
      type: Date,
      required: true,
      default: new Date(),
    },
  }],
},
  {
    timestamps: true,
  }
)

module.exports = mongoose.model(modelName, TestSchema)