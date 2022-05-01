test("throw Error when passing no variable",()=>{
  class Foo {
    constructor({message}){
      this.message = message;
    }
  }

  expect(() => new Foo()).toThrow();//errorがthrowされたかのチェック
  expect(() => new Foo()).toThrow(TypeError);
  expect(() => new Foo()).toThrow("Cannot destructure property 'message' of 'undefined' as it is undefined.");

})
