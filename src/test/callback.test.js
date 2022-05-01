const fetchDataWithCallback = callback =>{
  setTimeout(callback,3000,'lemon');
};

test("return lemon",() =>{
  //非同期、callbackのテスト
  const callback = () =>{
    expect(data).toBe('lemon');
    done();//テスト終了を宣言
  }

  fetchDataWithCallback(callback);
})
