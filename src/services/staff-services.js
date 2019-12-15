import axios from "axios";

export default class StaffServices {
  // baseUrl = "https://hr-service-beeweb.herokuapp.com/users";
  baseUrl = "https://beeweb-2536.herokuapp.com";

  getAllUsers = ({ page, by }) => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/users`,
      params: {
        page,
        by
      }
    });
  };

  deleteUser = userId => {
    return axios.delete(`${this.baseUrl}/users/${userId}`);
  };

  addUser = data => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/signup`,
      data: {
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email,
        role: data.role,
        salary: data.salary,
        birthday: data.birthday,
        phoneNumber: data.phoneNumber,
        password: data.password,
        repeatPassword: data.repeatPassword
      }
    });
  };

  editUser = obj => {
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/users/${obj.id}`,
      data: obj.obj
    });
  };

  getUser = userId => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/users/${userId}`
    });
  };
}
