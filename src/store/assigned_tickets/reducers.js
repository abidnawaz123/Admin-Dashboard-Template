import { combineReducers } from "@reduxjs/toolkit";

const initialStates = {
  loading: false,
  error: null,
  tickets: null,
  updateTicketLoading: false,
  updateTicketError: null,
};

const ticketsReducers = (state = initialStates, action) => {
  switch (action.type) {
    case "GET_ASSIGNED_TICKETS_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_ASSIGNED_TICKETS_FAILED":
      return { ...state, error: action.message, loading: false };
    case "GET_ASSIGNED_TICKETS_SUCCESS":
      return { ...state, tickets: action.payload, loading: false };

    //Changing tickets

    case "UPDATE_TICKET_REQUEST":
      return { ...state, updateTicketLoading: true, error: null };
    case "UPDATE_TICKET_ERROR":
      return {
        ...state,
        updateTicketError: action.message,
        updateTicketLoading: false,
      };
    case "UPDATE_TICKET_SUCCESS":
      return { ...state, tickets: action.payload, loading: false };

    default:
      return state;
  }
};

export default combineReducers({
  ticketsDetails: ticketsReducers,
});
