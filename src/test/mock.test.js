describe("#jest.fn()",() =>{
  test("Check jest.fn()",() =>{
    const mockFunction = jest.fn()
    .mockImplementationOnce(() => 'Hello')
    .mockImplementationOnce(() => 'Good Bye');

    expect(mockFunction()).toBe('Hello');
    expect(mockFunction()).toBe('Good Bye');
    expect(mockFunction()).toBe(undefined);
    //mockFunctionの結果はundefinedである。
    // expect(mockFunction).toBe(undefined);
    //関数はmockプロパティをもつ
    // expect(mockFunction).toHaveProperty('mock');
    //mockFunctionが１度呼び出された
    // expect(mockFunction.mock.calls.length).toBe(1);
    //mockFunctionが１度呼び出されたが、引数は空だった。
    // expect(mockFunction.mock.calls[0]).toEqual([]);
    //mockFunctionの結果は1つある
    // expect(mockFunction.mock.results.length).toBe(1);
    //mockFunction関数が１度目に呼び出された結果は正常にリターンされている。
    // expect(mockFunction.mock.results[0].type).toBe('return');
    //mockFunction関数の１度目の結果はundefinedである。
    // expect(mockFunction.mock.results[0].value).toBe(undefined);
    //mockFunction関数からnewを利用してインスタンスを作成していない
    // expect(mockFunction.mock.instances[0]).toBe(undefined);

  });
});

describe("Math.random return 1",() =>{
  //Math.randomは１を返す。
  const spy = jest.spyOn(Math,"random").mockImplementation(() => 1);

  afterEach(() =>{
    //mock関数をオリジナルの関数に戻す
    spy.mockRestore();
  });

  test("Math.random return 1",() =>{
    expect(Math.random()).toEqual(1);
  });

  test("Math.random return under 1",() =>{
    //1未満である。
    expect(Math.random()).toBeLessThan(1);
  })
})
