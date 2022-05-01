import axios from 'axios';
import Users from "../component/MockApi";
import MockAdapter from "axios-mock-adapter";

//axios全体をモック化
const mock = new MockAdapter(axios);
mock.onGet("/users.json").reply(200,{
  //return data of json
  users:[{name:'Bob'}],
});
test("axios-mock",async () =>{
  axios.get("/users.json").then((res) =>{
    //res.data = return json data
    expect(Users.all()).resolves.toEqual(res.data);
  });
});

afterEach(() =>{
  //You can restore the original adapter
  //モック関数をリセットすることで他のテストに影響を与えない。
  mock.restore();
})
