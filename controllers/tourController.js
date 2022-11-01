const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')); // read file

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    message: 'All tours',
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: { tours },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1; // convert to number from string
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      message: 'Invalid ID',
      status: 'fail',
    });
  }

  res.status(200).json({
    message: 'Single tour',
    status: 'success',
    data: { tour: tour },
  });
};

exports.addTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      message: 'New tour created',
      status: 'success',
      data: { tour: newTour },
    });
    // res.status(200).json({ message: 'Got a POST request', status: 200 });
  });
};

exports.updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      message: 'Invalid ID',
      status: 'fail',
    });
  }

  res.status(200).json({
    message: 'Tour updated',
    status: 'success',
    data: { tour: '<Updated tour here...>' },
  });
};

exports.deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      message: 'Invalid ID',
      status: 'fail',
    });
  }

  res.status(204).json({
    message: 'Tour deleted',
    status: 'success',
    data: null,
  });
};
