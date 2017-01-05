console.log('array demo');

const mongoose = require('mongoose');

// 首先定义表结构
const ArraySchema = mongoose.model('ArraySchema', {
  name: String,
  arr: Array,
  // 不定义数组内部结构的情况下，可以插入任意结构的内容
});


const as0 = new ArraySchema({
  name: 'foo',
  arr: [{
    a: 'A', b: 'B',
  }, {
    c: 'C', d: 'D',
  }, {
    e: Date.now(), // 错误的日期插入方式
    f: new Date(),
  }],
});
as0.save().then(console.log).catch(console.log);
// { __v: 0,
//   name: 'foo',
//   _id: 586dbb9713f4462194c7f6da,
//   arr:
//    [ { b: 'B', a: 'A' },
//      { d: 'D', c: 'C' },
//      { f: 2017-01-05T03:20:55.583Z, e: 1483586455583 } ] }


const ArraySchema2 = mongoose.model('ArraySchema2', {
  name: String,
  arr: [{
    foo: String,
    bar: { type: Date, default: Date.now },
  }]
});

const as1 = new ArraySchema2({
  name: 'bar',
  arr: [{
    foo: 'AbcDe'
  }, {
    Abc: 'Def', // 在已经定义了数组结构的情况下只能插入指定的内容
  }]
});
as1.save().then(console.log).catch(console.log);
// { __v: 0,
//   name: 'bar',
//   _id: 586dbce10cfea81434498305,
//   arr:
//    [ { foo: 'AbcDe',
//        _id: 586dbce10cfea81434498307,
//        bar: 2017-01-05T03:26:25.404Z },
//      { _id: 586dbce10cfea81434498306, bar: 2017-01-05T03:26:25.404Z } ] }
