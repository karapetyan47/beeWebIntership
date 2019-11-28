import axios from "axios";

export default class OPServices {
  baseUrl = "https://beeweb-2536.herokuapp.com";

  getAllPositions = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/openpositions`
    });
  };

  deletePosition = positionId => {
    return axios.delete(`${this.baseUrl}/openpositions/${positionId}`);
  };

  addPosition = data => {
    console.log("data", data);
    return axios({
      method: "POST",
      url: `${this.baseUrl}/openpositions`,
      data: {
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

  editPosition = obj => {
    console.log("obj", obj);
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/openpositions/${obj.id}`,
      data: obj.obj
    });
  };
}
