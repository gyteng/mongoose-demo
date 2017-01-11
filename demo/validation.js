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

const Validation = mongoose.model('Validation', validationschema);

const val = new Validation();
val.name = 'abc';
val.balance = 10,
val.type = 'A';
val.phone = '15012341234';
val.save().then(console.log).catch(console.log);
// 插入成功

const val1 = new Validation();
val1.name = 'abc';
val1.balance = 10,
val1.type = 'A';
val1.phone = '150123412341';
val1.save().then(console.log).catch(console.log);
// phone 格式错误
