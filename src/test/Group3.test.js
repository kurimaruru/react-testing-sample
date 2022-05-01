describe("before,after timing",()=>{
  beforeAll(() => console.log("1 - beforeAll"));
  afterAll(() => console.log("1 - afterAll"));
  beforeEach(() => console.log("1 - beforeEach"));
  afterEach(() => console.log("1 - afterEach"));
  test("test1",() => console.log("test1"));
  describe("scoped / nested block",() =>{
    beforeAll(() => console.log("2 - beforeAll"));
    afterAll(() => console.log("2 - afterAll"));
    beforeEach(() => console.log("2 - beforeEach"));
    afterEach(() => console.log("2 - afterEach"));
    test("test1",() => console.log("test2"));
  })

})
