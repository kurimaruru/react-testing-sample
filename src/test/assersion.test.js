const can1 = {
  flavor:'grapefruit',
  ounces:12,
};
const can2 = {
  flavor:'grapefruit',
  ounces:12,
};

const can3 = can2;

test("have all the same properties",() =>{
  expect(can1).toEqual(can2);
});

test("are not the exact same can",() =>{
  expect(can1).not.toBe(can2);
});

test("are the same references",() =>{
  expect(can2).toBe(can3);
});

test("are the same value",() =>{
  expect(can1.ounces).toBe(can2.ounces);
  expect(can1.ounces).toEqual(can2.ounces);
});
