console.log('update demo');

const mongoose = require('mongoose');

const Update = mongoose.model('Update', {
  foo: String,
  bar: [{
    a: String,
    b: Number,
  }],
});

// Update.create([{
//   foo: 'A', bar: [{a: '123', b: 456}],
// }, {
//   foo: 'B', bar: [{a: '123', b: 456}]
// }]).then(console.log).catch(console.log);

Update.findOneAndUpdate({
  foo: 'A',
}, {
  foo: 'a',
}).then(console.log).catch(console.log);

Update.findOneAndUpdate({
  foo: 'B',
}, {
  $push: { // 往数组增加一条，采用$push
    bar: {
      a: 'ZZZ', b: 111,
    }
  }
}, {
  new: true,
}).then(console.log).catch(console.log);
