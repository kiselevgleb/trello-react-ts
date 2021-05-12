import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
  POST_TICKET_REQUEST,
  POST_TICKET_FAILURE,
  POST_TICKET_SUCCESS,

} from './actionTypes';

export const postTicketRequest = (data:string) => ({
  type: POST_TICKET_REQUEST,
  payload: { data },
});

export const postTicketFailure = (errorTicket:string) => ({
  type: POST_TICKET_FAILURE,
  payload: { errorTicket },
});

export const postTicketSuccess = (ticket:string) => ({
  type: POST_TICKET_SUCCESS,
  payload: { ticket },
});

export const getTicketsRequest = () => ({
  type: GET_TICKETS_REQUEST,
});

export const getTicketsFailure = (error:string) => ({
  type: GET_TICKETS_FAILURE,
  payload: { error },
});

export const getTicketsSuccess = (tickets:string) => ({
  type: GET_TICKETS_SUCCESS,
  payload: { tickets },
});