const fetchData = () =>Promise.resolve('lemon');
const fetchFruit = (category = 'fruit') => category ==='fruit'
?Promise.resolve('lemon')
:Promise.reject(new Error('not exists'))

test("resolves to lemon",() =>{
  return expect(fetchData()).resolves.toBe('lemon');
});

test("resolves to lemon async/await",async() =>{
  await expect(fetchData()).resolves.toBe('lemon');
});

test('rejects with fish',() =>{
  expect(fetchFruit('fish')).rejects.toThrow('not exists');
})
