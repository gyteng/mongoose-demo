console.log('aggregate demo');

const mongoose = require('mongoose');

const Aggregate = mongoose.model('Aggregate', {
  name: String,
  time: Date,
  key: Number,
  arr: [{
    name: String,
    balance: Number,
  }]
});

// Aggregate.create([{
//   name: 'ABC', time: new Date(), key: 100, arr: [
//     {name: 'aaa', balance: 1},
//     {name: 'bbb', balance: 2},
//     {name: 'ccc', balance: 3},
//   ]
// }, {
//   name: 'DEF', time: new Date(), key: 200, arr: [
//     {name: 'qwe', balance: 4},
//     {name: 'asd', balance: 5},
//     {name: 'zxc', balance: 6},
//     {name: 'ZZZ', balance: 7},
//   ]
// }, {
//   name: 'OPQ', time: new Date(), key: 300, arr: [
//     {name: 'BBB', balance: 8},
//     {name: 'NNN', balance: 9},
//   ]
// }]).then(console.log).catch(console.log);

// 计算arr字段里的balance的和
Aggregate.aggregate([{
  $project: {
    name: 1,
    time: 1,
    arr: 1,
  }
}, {
  $unwind: '$arr',
}, {
  $group: {
    _id: '$name',
    time: { $max: '$time' },
    balance: { $sum: '$arr.balance' },
  }
}]).then(console.log).catch(console.log);
// [ { _id: 'DEF', time: 2017-01-05T06:42:47.421Z, balance: 22 },
//   { _id: 'OPQ', time: 2017-01-05T06:42:47.421Z, balance: 17 },
//   { _id: 'ABC', time: 2017-01-05T06:42:47.421Z, balance: 6 } ]
