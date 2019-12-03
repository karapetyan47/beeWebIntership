import axios from "axios";

export default class UsersService {
  baseUrl = "https://beeweb-2536.herokuapp.com";

  login = ({ email, password }) => {
    return axios({
      method: "POST", //GET
      url: `${this.baseUrl}/signup/login`,
      data: {
        email,
        password
      }
    });
  };

  getMe = () => {
    return axios({
      method: "GET", //GET
      url: `${this.baseUrl}/users/me`
    });
  };
}
