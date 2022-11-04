const express = require('express')
const router = express.Router()
const problemController = require('../controllers/problem.controller')

router.post('/add', problemController.add);

module.exports = router