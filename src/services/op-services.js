import axios from "axios";

export default class OPServices {
  baseUrl = "https://beeweb-2536.herokuapp.com";

  getAllPositions = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/open-positions`
    });
  };

  deletePosition = positionId => {
    return axios.delete(`${this.baseUrl}/open-positions/${positionId}`);
  };

  addPosition = data => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/open-positions`,
      data: {
        title: data.title,
        description: data.description,
        ageLimit: data.ageLimit,
        salary: data.salary,
        gender: data.gender
      }
    });
  };

  editPosition = obj => {
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/open-positions/${obj.id}`,
      data: obj.obj
    });
  };

  getPosition = posId => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/open-positions/${posId}`
    });
  };
}
