const Test = require("../models/Question");

const details = async (req, res) => {
  try {
    let query = Test.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Test.countDocuments();

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
    console.log(req.file);
    res.send('file uploaded successfully.')
  }
  catch (error) {
    res.status(400).send('Error while uploading file. Try again later.')
  }
}

module.exports = {
  details,
  add,
}