// const sum = require('../component/Sum.js');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import {sum} from "../component/Sum";

test('adds 1 + 2 to equal 3',() =>{
  expect(sum(1,2)).toBe(3);
})
