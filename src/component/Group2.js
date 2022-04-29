export const getBeverage = age =>{
  const filteredBeverages = () =>{
    let drink = age >= 20 ?'beer':'cola';
    return drink;
  }

  const beverage = filteredBeverages();
  return beverage;
}
