const Question = require("../models/Question");
const Test = require("../models/Test")

const details = async (req, res) => {
  try {
    let query = Question.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Question.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }
    const result = await query;
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  } 
}

const add = async (req, res) => {
  try {
    const total = req.body.total;
    let no;
    const test = await Test.findOne({}, {}, { sort: { 'createdAt': -1 } })
    if (test) {
      no = test.no + 1
    }
    else {
      no = 1
    }
    const newTest = new Test({
      no: no,
      count: total
    })

    await newTest.save()

    for (let i = 0; i < total; i++) {
      const choices = req.body[`choices${i}`];
      const choiceArray = choices.split(',')

      const newQuestion = new Question({
        test: no,
        id: req.body[`id${i}`],
        title: req.body[`title${i}`],
        image: req.body[`image${i}`],
        answer: req.body[`answer${i}`],
        choices: choiceArray,
        killertest: req.body[`killertest${i}`],
        gemela: req.body[`gemela${i}`],
        newpregunta: req.body[`newpregunta${i}`],
        tema: req.body[`tema${i}`],
        category: req.body[`category${i}`],
        video: req.body[`video${i}`],
        difficulty: req.body[`difficulty${i}`],
      })
      console.log('i: ', i)
      console.log('total: ', total)
      await newQuestion.save()
    }
    res.status(200).send('Test saved successfully.')
  }
  catch (error) {
    res.status(400).send('Error while saving test. Try again later.')
  }
}

const read = async (req, res) => {
  try {
    const tests = await Test.find();
    let data = []
    for (let i = 0; i < tests.length; i++) {
      data[i] = {
        no: tests[i].no,
        count: tests[i].count,
      }
    }
    res.status(200).send(data)
  }
  catch (error) {
    res.status(401).send(error)
  }
}

const readTest = async (req, res) => {
  try {
    const questions = await Question.find({ test: req.params.id })
    res.status(200).send(questions)
  }
  catch (error) {
    res.status(400).send(error)
  }
}

const updateTest = async (req, res) => {
  try {
    const test = await Test.findOne({ no: req.params.id })
    const total = req.body.total
    test.count = total
    await test.save()
    await Question.deleteMany({ test: req.params.id })

    for (let i = 0; i < total; i++) {
      const choices = req.body[`choices${i}`];
      const choiceArray = choices.split(',')

      const newQuestion = new Question({
        test: req.params.id,
        id: req.body[`id${i}`],
        title: req.body[`title${i}`],
        image: req.body[`image${i}`],
        answer: req.body[`answer${i}`],
        choices: choiceArray,
        killertest: req.body[`killertest${i}`],
        gemela: req.body[`gemela${i}`],
        newpregunta: req.body[`newpregunta${i}`],
        tema: req.body[`tema${i}`],
        category: req.body[`category${i}`],
        video: req.body[`video${i}`],
        difficulty: req.body[`difficulty${i}`],
      })
      await newQuestion.save()
    }
    res.status(200).send('Test saved successfully.')

  }
  catch (error) {
    res.status(401).send(error)
  }
}

const deleteTest = async (req, res) => {
  try {
    await Test.deleteOne({ no: req.params.id })
    await Question.deleteMany({ test: req.params.id })
    res.status(200).send('Successfully Deleted.')
  }
  catch (error) {
    res.status(401).send(error)
  }
}

const readbyId = async ( req, res) => {
  try{
    const id = req.params.id;
    
    res.status(200).send('hello')
  }
  catch(error){
    res.status(401).send(error)
  }
  
}

module.exports = {
  details,
  add,
  read,
  readTest,
  updateTest,
  deleteTest,
  readbyId,
}