import {
    MISSION_NEW_SUCCESS, MISSION_NEW_FIRED, MISSION_NEW_VE,
    MISSION_NEW_ERROR, MISSION_FLIST, MISSION_SET,
    NEW_PARTICIPANT_FIRED, NEW_PARTICIPANT_ERROR, NEW_PARTICIPANT_VE, NEW_PARTICIPANT_SUCCESS
} from './_ActionType';
import HttpRequest from '../util/HttpRequest'
import Validation from '../util/Validation'

const INITIAL_STATE = {
    request: new HttpRequest({ response: null, message: null }),
    requestNewParticipant: new HttpRequest({ response: null, message: null }),

    validation: new Validation({ empty: true }),
    validationNewParticipant: new Validation({ empty: true }),

    missionList: [],
    mission: null, participantList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_PARTICIPANT_FIRED:
            return {
                ...state,
                requestNewParticipant: new HttpRequest({ inProgress: true, message: null }),
                validationNewParticipant: new Validation({ empty: true })
            }
        case NEW_PARTICIPANT_ERROR:
            return { ...state, requestNewParticipant: new HttpRequest({ inProgress: false, message: action.payload }) }
        case NEW_PARTICIPANT_SUCCESS:
            return { ...state, requestNewParticipant: new HttpRequest({ inProgress: false }) }
        case NEW_PARTICIPANT_VE:
            return { ...state, validationNewParticipant: new Validation({ empty: false, response: action.payload }) }
        ///
        case MISSION_NEW_FIRED:
            return {
                ...state,
                request: new HttpRequest({ inProgress: true, message: null }),
                validation: new Validation({ empty: true })
            }
        case MISSION_NEW_VE:
            return { ...state, validation: new Validation({ empty: false, response: action.payload }) }
        case MISSION_NEW_ERROR:
            return { ...state, request: new HttpRequest({ inProgress: false, message: action.payload }) }
        case MISSION_NEW_SUCCESS:
            return { ...state, request: new HttpRequest({ inProgress: false }) }
        case MISSION_FLIST:
            return { ...state, missionList: action.payload }
        case MISSION_SET:
            return { ...state, mission: action.payload }
        default:
            return state;
    }
}