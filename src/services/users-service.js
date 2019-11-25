import axios from "axios";

export default class UsersService {
  // baseUrl = "https://hr-service-beeweb.herokuapp.com/users";
  baseUrl = "https://beeweb-2536.herokuapp.com/signup";

  login = ({ email, password }) => {
    return axios({
      method: "POST", //GET
      url: `${this.baseUrl}/login`,
      data: {
        email,
        password
      }
    });
  };
}
