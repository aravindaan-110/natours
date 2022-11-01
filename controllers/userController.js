const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')); // read file

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    // 500 is server error
    message: 'This route is not yet defined',
    status: 'fail',
  });
};

exports.addUser = (req, res) => {
  res.status(500).json({
    // 500 is server error
    message: 'This route is not yet defined',
    status: 'fail',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    // 500 is server error
    message: 'This route is not yet defined',
    status: 'fail',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    // 500 is server error
    message: 'This route is not yet defined',
    status: 'fail',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    // 500 is server error
    message: 'This route is not yet defined',
    status: 'fail',
  });
};
