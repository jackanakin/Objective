import {
    FIREBASE_SUB_SUCCESS, FIREBASE_SUB_ERROR, FIREBASE_SUB_FIRED, FIREBASE_SUB_RESET,
    FIREBASE_LOG_FIRED, FIREBASE_LOG_SUCCESS, FIREBASE_LOG_ERROR
} from './_ActionType';
import HttpRequest from '../util/HttpRequest'

const INITIAL_STATE = {
    request: new HttpRequest({ response: null })
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIREBASE_SUB_FIRED:
            return Object.assign({}, state, {
                request: new HttpRequest({ inProgress: true, response: null })
            });
        case FIREBASE_SUB_ERROR:
            return Object.assign({}, state, {
                request: new HttpRequest({ response: action.payload })
            });
        case FIREBASE_SUB_SUCCESS:
            return Object.assign({}, state, {
                request: new HttpRequest({ response: null })
            });
        case FIREBASE_SUB_RESET:
            return Object.assign({}, state, {
                request: new HttpRequest({ response: null, inProgress: false })
            });
        case FIREBASE_LOG_SUCCESS:
            return Object.assign({}, state, {
                request: new HttpRequest({ response: null })
            });
        default:
            return state;
    }
}