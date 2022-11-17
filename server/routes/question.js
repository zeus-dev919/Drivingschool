const express = require('express')
const router = express.Router()
const {uploadImage} = require('../middleware/upload')
const questionController = require('../controllers/question.controller')

router.get('/read', questionController.read);
router.get('/read/:id', questionController.readTest);
router.get('/readbyid/:id', questionController.readbyId);
router.post('/add', [uploadImage], questionController.add);

router.post('/updateTest/:id', [uploadImage], questionController.updateTest);
router.post('/deleteTest/:id', questionController.deleteTest)

module.exports = router