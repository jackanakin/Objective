import {
    MISSION_NEW, MISSION_FIRED, MISSION_VE, MISSION_NEW_ERROR
} from './_ActionType';
import HttpRequest from '../util/HttpRequest'
import Validation from '../util/Validation'
import Mission from '../entity/Mission';

const INITIAL_STATE = {
    request: new HttpRequest({ response: null, message: null }),
    mission: new Mission({}), validation: new Validation({ empty: true })
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MISSION_FIRED:
            return Object.assign({}, state, {
                request: new HttpRequest({ inProgress: true, message: null }),
                validation: new Validation({ empty: true })
            });
        case MISSION_VE:
            return Object.assign({}, state, {
                validation: new Validation({ empty: false, response: action.payload })
            });
        case MISSION_NEW_ERROR:
            return { ...state, request: new HttpRequest({ inProgress: false, message: action.payload }) }
        default:
            return state;
    }
}