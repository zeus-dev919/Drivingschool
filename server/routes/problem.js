const express = require('express')
const router = express.Router()
const {uploadImage} = require('../middleware/upload')
const testController = require('../controllers/test.controller')

router.post('/add', [uploadImage], testController.add);

module.exports = router