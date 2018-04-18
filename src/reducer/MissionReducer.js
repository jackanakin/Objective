import {
    MISSION_NEW_SUCCESS, MISSION_NEW_FIRED, MISSION_NEW_VE, MISSION_NEW_ERROR, MISSION_FLIST
} from './_ActionType';
import HttpRequest from '../util/HttpRequest'
import Validation from '../util/Validation'
import Mission from '../entity/Mission';

const INITIAL_STATE = {
    request: new HttpRequest({ response: null, message: null }),
    //mission: new Mission({}), 
    validation: new Validation({ empty: true }),
    missionList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MISSION_NEW_FIRED:
            return Object.assign({}, state, {
                request: new HttpRequest({ inProgress: true, message: null }),
                validation: new Validation({ empty: true })
            });
        case MISSION_NEW_VE:
            return Object.assign({}, state, {
                validation: new Validation({ empty: false, response: action.payload })
            });
        case MISSION_NEW_ERROR:
            return { ...state, request: new HttpRequest({ inProgress: false, message: action.payload }) }
        case MISSION_NEW_SUCCESS:
            return { ...state, request: new HttpRequest({ inProgress: false }) }
        case MISSION_FLIST:
            return { ...state, missionList: action.payload }
        default:
            return state;
    }
}