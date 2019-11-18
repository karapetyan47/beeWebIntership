import axios from "axios";

export default class StaffServices {
  baseUrl = "https://hr-service-beeweb.herokuapp.com/users";

  getAllUsers = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}`
    });
  };

  deleteUser = userId => {
    // axios({
    //   method: "DELETE",
    //   url: `${this.baseUrl}/${userId}`
    // });
    // setAuterizationToken(localStorage.jwtToken);
    // console.log(userId);
    axios.delete(`${this.baseUrl}/${userId}`);
  };

  addUser = data => {
    axios({
      method: "POST",
      url: `${this.baseUrl}/register`,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.email,
        birthday: data.birthday,
        phoneNumber: data.phoneNumber,
        password: data.password,
        repeatPassword: data.repeatPassword
      }
    });
  };

  editUser = ({ name, value, id }) => {
    axios({
      method: "PUT",
      url: `${this.baseUrl}/${id}`,
      data: {}
    });
  };
}
