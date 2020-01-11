export const GET_TICKETS_SUCCEED = "GET_CANDIDAT_SUCCEED";

export const ticketsReducer = (state, action) => {
  switch (action.type) {
    case GET_TICKETS_SUCCEED:
      return {
        tickets: action.payload.ticketList,
        ticketsCount: action.payload.count
      };
    default:
      return state;
  }
};
