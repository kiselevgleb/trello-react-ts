import { takeEvery, put, spawn, debounce, retry } from 'redux-saga/effects';
import { postTicketSuccess, postTicketFailure, getTicketsSuccess, getTicketsFailure } from '../actions/actionCreators';
import { POST_TICKET_REQUEST, GET_TICKETS_REQUEST } from '../actions/actionTypes';
import { postTicket, listTickets, } from '../api/index';

function* handleGetTicketsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listTickets);
        yield put(getTicketsSuccess(data));
    } catch (e) {
        yield put(getTicketsFailure(e.message));
    }
}

// watcher
function* watchGetTicketsSaga() {
    yield takeEvery(GET_TICKETS_REQUEST, handleGetTicketsSaga);
}

function filterPostTicketAction({ type, payload }) {
    return type === POST_TICKET_REQUEST && payload.data !== ''
}

// watcher
function* watchPostTicketSaga() {
    yield debounce(100, filterPostTicketAction, handlePostTicketSaga);
}

// worker
function* handlePostTicketSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, postTicket, action.payload.data);
        yield put(postTicketSuccess(data));
    } catch (e) {
        yield put(postTicketFailure(e.message));
    }
}

export default function* saga() {
    yield spawn(watchPostTicketSaga);
    yield spawn(watchGetTicketsSaga);
}