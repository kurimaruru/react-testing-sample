import axios from "axios";

class Users {
  static all(){
    const name = {users:[{name:"Bob"}]};
    return axios.get('/users.json').then(() =>{return name;});
  }
}

export default Users;
