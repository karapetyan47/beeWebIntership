import axios from "axios";

export default class CandidatsServices {
  baseUrl = "https://beeweb-2536.herokuapp.com";

  getAllCandidats = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/candidats`
    });
  };

  deleteCandidat = candidatId => {
    return axios.delete(`${this.baseUrl}/candidats/${candidatId}`);
  };

  addCandidat = data => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/candidats`,
      data: data
    });
  };

  editCandidat = obj => {
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/candidats/${obj.id}`,
      data: obj.obj
    });
  };
  getCandidat = canId => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/candidats/${canId}`
    });
  };
}
