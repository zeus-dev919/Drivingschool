const Problem = require("../models/Problem");

const add = async (req, res) => {
  try {
    console.log(req.file);
    res.send('file uploaded successfully.')
  }
  catch (error) {
    res.status(400).send('Error while uploading file. Try again later.')
  }
}

module.exports = {
  add,
}