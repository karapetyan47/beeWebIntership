import axios from "axios";

export default class BenefitsService {
  baseUrl = "https://beeweb-2536.herokuapp.com";

  getBenefits = () => {
    return axios({
      method: "GET", //GET
      url: `${this.baseUrl}/benefits`
    });
  };

  deleteBenefit = benefitId => {
    axios.delete(`${this.baseUrl}/benefits/${benefitId}`);
  };

  addBenefit = data => {
    axios({
      method: "POST",
      url: `${this.baseUrl}/benefits`,
      data: {
        title: data.title,
        description: data.description
      }
    });
  };

  editBenefit = obj => {
    console.log("obj", obj);
    axios({
      method: "PATCH",
      url: `${this.baseUrl}/benefits/${obj.id}`,
      data: obj.obj
    });
  };

  getBenefitsHistorys = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/benefitshistorys`
    });
  };
  deleteBenefitsHistory = benefitsHistoryId => {
    return axios.delete(
      `${this.baseUrl}/benefitshistorys/${benefitsHistoryId}`
    );
  };

  addBenefitsHistory = data => {
    axios({
      method: "POST",
      url: `${this.baseUrl}/benefitshistorys`,
      data: {
        benefitId: data.benefitId,
        userId: data.userId
      }
    });
  };
}
