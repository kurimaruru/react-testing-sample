describe("#reset mocks with spyOn",() =>{
  const mockData = new Date('2019-12-21');
  const originalDate = new Date('2020-12-25');
  let spy = null;
  beforeEach(() =>{
    spy = jest.spyOn(global,"Date").mockImplementation(() =>mockData);
  });

  afterEach(() =>{
    // spy.mockRestore();
  });

  it('jest.cliarAllMocks',() =>{
    //mockDataと異なる引数を与えてもmockData返される。
    expect(new Date('2019-12-25')).toEqual(mockData);
    expect(spy.mock.calls).toEqual([['2019-12-25']]);
    expect(spy.mock.results).toEqual([{type:'return',value:mockData}]);
  });

  //reset
  jest.clearAllMocks();

});
