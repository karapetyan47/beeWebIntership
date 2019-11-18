import axios from "axios";

export default class UsersService {
  baseUrl = "https://hr-service-beeweb.herokuapp.com/users";

  login = ({ email, password }) => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/login`,
      data: {
        email,
        password
      }
    });
  };
}
