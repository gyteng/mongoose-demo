console.log('quickStart demo');

const mongoose = require('mongoose');
const QuickStart = mongoose.model('QuickStart', {
  name: String,
  money: Number,
});

// 新增一条数据
const qs0 = new QuickStart({
  name: 'foo',
  money: 100,
});
qs0.save().then(console.log).catch(console.log);
// 成功则返回:
// { __v: 0, name: 'foo', money: 100, _id: 586db4e5a843891304f0e824 }
// 这个_id自动是自动生成的唯一ID

const qs1 = new QuickStart({
  name: 999,   // 自动转换成字符串
  money: '99', // 自动转换成数字
});
qs1.save().then(console.log).catch(console.log);

const qs2 = new QuickStart({
  name: 'Abc',
  money: 'a', // 当字符串无法转换成Number时，无法插入
});
qs2.save().then(console.log).catch(console.log);
