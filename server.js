const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.199.50/test');

if(process.argv[2]) {
  require('./demo/' + process.argv[2]);
}
