import {
    MISSION_NEW, MISSION_FIRED
} from './_ActionType';
import HttpRequest from '../util/HttpRequest'
import Mission from '../entity/Mission';

const INITIAL_STATE = {
    request: new HttpRequest({ response: null, message: null }),
    mission: new Mission({})
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MISSION_FIRED:
            return Object.assign({}, state, {
                request: new HttpRequest({ inProgress: true, message: null })
            });
        default:
            return state;
    }
}