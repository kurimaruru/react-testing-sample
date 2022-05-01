import {greet} from "../component/Greeter";
describe("#greeter",() =>{
  describe("greet",() =>{
    const noonTime = new Date('2020-10-10T12:00:00');
    const morningTime = new Date('2020-10-10T11:00:00');

    beforeEach(() =>{
      Date = jest.fn(() => noonTime);
    });

    describe("mock date function",() =>{
      test("Hello <name> when the time is 12:00-05:59",() =>{
        expect(greet('tanaka')).toEqual('Hello Tanaka!');
      });
      test("Good Morning <name> when the time is 06:00-11:59",() =>{
        Date = jest.fn(() => morningTime);
        expect(greet('yamada')).toEqual('Good Morning Yamada!');
      });
    });
  });
})
