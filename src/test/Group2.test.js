import { getBeverage } from "../component/Group2";

describe("getBeverage",() =>{
  //Math.random関数をモック化し、１回目と２回目の戻り値を設定
  // const spy = jest.spyOn(Math,'random')
  //   .mockImplementationOnce(() => 0.7)
  //   .mockImplementationOnce(() => 0);
  const adult = 20;
  const boy = 18;

  //年齢が20歳の場合にalcoholがtrueの飲料が返されることを確認
  test('return beer when age is 20',() =>{
    expect(getBeverage(adult)).toBe('beer');
  });

  test('return cola when age is lower 20',() =>{
    expect(getBeverage(boy)).toBe('cola');
  });
})
