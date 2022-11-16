const express = require('express')
const router = express.Router()
const {uploadImage} = require('../middleware/upload')
const questionController = require('../controllers/question.controller')

router.post('/add', [uploadImage], questionController.add);

module.exports = router