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
    return axios.delete(`${this.baseUrl}/benefits/${benefitId}`);
  };

  addBenefit = data => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/benefits`,
      data: {
        title: data.title,
        description: data.description
      }
    });
  };

  editBenefit = obj => {
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/benefits/${obj.id}`,
      data: obj.obj
    });
  };

  getBenefitsHistorys = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/benefits-historys`
    });
  };
  deleteBenefitsHistory = benefitsHistoryId => {
    return axios.delete(
      `${this.baseUrl}/benefits-history/${benefitsHistoryId}`
    );
  };

  addBenefitsHistory = data => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/benefits-history`,
      data: {
        benefitId: data.benefitId,
        userId: data.userId
      }
    });
  };
}
