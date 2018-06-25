import {
    MISSION_NEW_SUCCESS, MISSION_NEW_FIRED, MISSION_NEW_VE,
    MISSION_NEW_ERROR, MISSION_FLIST, MISSION_SET,
    NEW_PARTICIPANT_FIRED, NEW_PARTICIPANT_ERROR, NEW_PARTICIPANT_VE, NEW_PARTICIPANT_SUCCESS,
    PARTICIPANT_FLIST, OBJECTIVE_FLIST,
    NEW_OBJECTIVE_FIRED, NEW_OBJECTIVE_ERROR, NEW_OBJECTIVE_VE, NEW_OBJECTIVE_SUCCESS
} from './_ActionType';
import HttpRequest from '../util/HttpRequest'
import Validation from '../util/Validation'

const INITIAL_STATE = {
    request: new HttpRequest({ response: null, message: null }),
    requestNewParticipant: new HttpRequest({ response: null, message: null }),
    requestNewObjective: new HttpRequest({ response: null, message: null }),

    validation: new Validation({ empty: true }),
    validationNewParticipant: new Validation({ empty: true }),
    validationNewObjective: new Validation({ empty: true }),

    missionList: [], participantSource: {},
    mission: null, participantList: [],
    objectiveList: []
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
            let tempArray = state.participantList.concat(action.payload);
            return { ...state, requestNewParticipant: new HttpRequest({ inProgress: false }), participantList: tempArray }
        case NEW_PARTICIPANT_VE:
            return {
                ...state,
                requestNewParticipant: new HttpRequest({ inProgress: false, message: null }),
                validationNewParticipant: new Validation({ empty: false, response: action.payload })
            }
        ///
        case MISSION_NEW_FIRED:
            return {
                ...state,
                request: new HttpRequest({ inProgress: true, message: null }),
                validation: new Validation({ empty: true })
            }
        case MISSION_NEW_VE:
            return { ...state, validation: new Validation({ empty: false, response: action.payload }) }
        case NEW_OBJECTIVE_VE:
            return { ...state, validationNewObjective: new Validation({ empty: false, response: action.payload }) }
        case NEW_OBJECTIVE_SUCCESS:
            return { ...state, validationNewObjective: new Validation({ empty: true }) }
        case MISSION_NEW_ERROR:
            return { ...state, request: new HttpRequest({ inProgress: false, message: action.payload }) }
        case MISSION_NEW_SUCCESS:
            return { ...state, request: new HttpRequest({ inProgress: false }) }
        case MISSION_FLIST:
            return { ...state, missionList: action.payload }
        case OBJECTIVE_FLIST:
            return { ...state, objectiveList: action.payload }
        case PARTICIPANT_FLIST:
            return { ...state, participantSource: action.payload }
        case MISSION_SET:
            return { ...state, mission: action.payload, participantList: [] }
        default:
            return state;
    }
}