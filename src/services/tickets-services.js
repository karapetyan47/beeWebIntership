import axios from "axios";

export default class TicketsServices {
  baseUrl = "https://beeweb-2536.herokuapp.com";

  getAllTickets = () => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/ticket-lists`
    });
  };

  deleteTicket = ticketId => {
    return axios.delete(`${this.baseUrl}/ticket-lists/${ticketId}`);
  };

  addTicket = data => {
    return axios({
      method: "POST",
      url: `${this.baseUrl}/ticket-lists`,
      data: {
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        userId: data.userId
      }
    });
  };

  editTicket = obj => {
    return axios({
      method: "PATCH",
      url: `${this.baseUrl}/ticket-lists/${obj.id}`,
      data: obj.obj
    });
  };

  getTicket = ticketId => {
    return axios({
      method: "GET",
      url: `${this.baseUrl}/ticket-lists/${ticketId}`
    });
  };
}
