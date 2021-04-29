import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
  POST_TICKET_REQUEST,
  POST_TICKET_FAILURE,
  POST_TICKET_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  tickets: [],
  loading: false,
  error: null,
  ticket: {},
  ticketsTodo: [],
  ticketsInPr: [],
  ticketsDone: [],
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {

    case POST_TICKET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_TICKET_FAILURE:
      const { errorTicket } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorTicket,
      };
    case POST_TICKET_SUCCESS:
      const { ticket } = action.payload;
      return {
        ...state,
        tickets: ticket,
        ticketsTodo: ticket.filter((tic) => tic.status === 'To do'),
        ticketsInPr: ticket.filter((tic) => tic.status === 'In progress'),
        ticketsDone: ticket.filter((tic) => tic.status === 'Done'),
        loading: false,
        error: null,
      };

    case GET_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TICKETS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_TICKETS_SUCCESS:
      const { tickets } = action.payload;
      return {
        ...state,
        tickets,
        ticketsTodo: tickets.filter((tic) => tic.status === 'To do'),
        ticketsInPr: tickets.filter((tic) => tic.status === 'In progress'),
        ticketsDone: tickets.filter((tic) => tic.status === 'Done'),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}