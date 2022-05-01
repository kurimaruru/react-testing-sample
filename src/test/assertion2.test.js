test("to equal can't compare class name",()=>{
  class Foo {
    constructor (){
      this.message = 'hello';
    }
  }

  class Bar extends Foo{
    constructor(){
      super();
    }
  }
  const foo = new Foo();
  const bar = new Bar();
  //全く同じプロパティを保つため、toEqualではtrueと評価される。
  expect(foo).toEqual(bar);
  //それに対し、クラス名まで評価すると異なると評価される。
  expect(foo.constructor.name).not.toEqual(bar.constructor.name);
})
