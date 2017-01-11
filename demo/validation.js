console.log('mongoose demo');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validationschema = new Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    min: [6, 'Too few balance'],
    max: 12,
  },
  type: {
    type: String,
    enum: ['A', 'B', 'C'],
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^1[0-9]{10}$/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: [true, 'User phone number required']
  }
});

const Validation = db.model('Validation', validationschema);

const val = new Validation();
val.name = 'abc';
val.balance = 10,
val.type = 'A';
val.phone = '15012341234';
val.save().then(console.log).catch(console.log);
