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
    console.log("data", data);
    return axios({
      method: "POST",
      url: `${this.baseUrl}/candidats`,
      data: {
        cv: data.cv,
        openPosId: data.position,
        name: data.name,
        surname: data.surName,
        email: data.email,
        age: data.age,
        gender: data.gender,
        birthday: data.birthday,
        skills: data.skills,
        experience: data.experience,
        education: data.education
      }
    });
  };

  editCandidat = obj => {
    console.log("obj", obj);
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/candidats/${obj.id}`,
      data: obj.obj
    });
  };
}
