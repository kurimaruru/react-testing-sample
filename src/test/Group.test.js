const isSour = beverage => beverage ==='lemonade' ? true : false;

describe('#isSour',() =>{
  test("lemonade is sour",() =>{
    expect(isSour('lemonade')).toBe(true);
  });

  test("cola is not sour",() =>{
    expect(isSour("cola")).toBe(false);
  });
});
