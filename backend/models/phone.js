const mongoose = require('mongoose')
const initialPhones = require('./phones-data')

const Phones = mongoose.model('Phones', {
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: String,
  price: {
    type: Number,
    required: true
  },
  imageFileName: {
    type: String,
    required: true
  },
  screen: String,
  processor: String,
  ram: Number,
})

module.exports = Phones;

Phones.findOne({}, async (err, doc) => {
  if (!doc) {
    Phones.insertMany(initialPhones, err => {
      if (err) {
        return console.error(err);
      }
      console.log("Initial phones inserted to Phones Collection");
    })
  }
})
