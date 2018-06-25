import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
    MISSION_NEW_FIRED, MISSION_NEW_VE, MISSION_NEW_ERROR,
    MISSION_NEW_SUCCESS, MISSION_FLIST, MISSION_SET, NEW_OBJECTIVE_VE,
    NEW_OBJECTIVE_SUCCESS, OBJECTIVE_FLIST
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';
import { saveValidate, buildMissionObject } from '../../entity/Mission';
import { saveValidateObjective, buildObjectiveObject } from '../../entity/Objective';
import * as Toast from '../../util/Toast';

export const concludeMission = (missionUID) => {
    return (dispatch) => {
        firebase.database().ref(`/missions/${missionUID}`).child("finished")
            .set(true);
    }
}

export const concludeObjective = (objective, missionUID) => {
    return (dispatch) => {
        firebase.database().ref(`/mission_objective/${missionUID}/${objective.key}`).child("status")
            .set("C");
    }
}

export const unlistMission = (missionUID) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        let encodedCurrentUser = b64.encode(currentUser.email);
        firebase.database().ref(`/account_mission/${encodedCurrentUser}`).off("value");
    }
}

export const listObjectives = (missionUID) => {
    return (dispatch) => {
        firebase.database().ref(`mission_objective/${missionUID}`)
            .on("value", snapshot => {
                dispatch({ type: OBJECTIVE_FLIST, payload: snapshot.val() });
            });
    }
}

export const newObjective = (objective, missionUID) => {
    return (dispatch) => {
        let validation = saveValidateObjective(objective);

        if (!_.isEmpty(validation)) {
            dispatch(objectiveValidationException(validation));
        } else {
            firebase.database().ref(`mission_objective/${missionUID}`)
                .push(objective).then(() => {
                    dispatch({ type: NEW_OBJECTIVE_SUCCESS });
                });
            Actions.pop();
        }
    }
}

export const setMission = (mission) => {
    return dispatch => {
        dispatch({ type: MISSION_SET, payload: mission });
        Actions.missionView({ title: mission.title });
    };
}

export const listMission = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        let encodedCurrentUser = b64.encode(currentUser.email);
        firebase.database().ref(`account_mission/${encodedCurrentUser}`)
            .on("value", snapshot => {
                dispatch({ type: MISSION_FLIST, payload: snapshot.val() })
            });
    }
}

export const newMission = (mission) => {
    return dispatch => {
        const { currentUser } = firebase.auth();
        let encodedCurrentUser = b64.encode(currentUser.email);
        mission.leader = encodedCurrentUser;
        let validation = saveValidate(mission);

        if (!_.isEmpty(validation)) {
            dispatch(validationException(validation));
        } else {
            dispatch(requestInProgress());
            let saveObj = buildMissionObject(mission);

            firebase.database().ref(`missions`)
                .push(saveObj)
                .then(value => {
                    let uid = value.path.pieces_[1];
                    firebase.database().ref(`mission_account/${uid}`)
                        .push({ account: encodedCurrentUser, status: 'a' })
                        .then(() => {
                            firebase.database().ref(`account_mission/${encodedCurrentUser}`)
                                .push({ mission: uid, status: 'a' })
                                .catch(error => newMissionError(error.message, dispatch));
                        }).catch(error => newMissionError(error.message, dispatch));
                })
                .then(res => {
                    newMissionSuccess(dispatch);
                })
                .catch(error => newMissionError(error.message, dispatch));
        }
    }
}

const newMissionSuccess = (dispatch) => {
    dispatch({ type: MISSION_NEW_SUCCESS });
    Actions.appHome();
    Toast.short(strings('newMission.newMissionSuccess'));
}

const newMissionError = (error, dispatch) => (
    dispatch(
        {
            type: MISSION_NEW_ERROR,
            payload: error
        }
    )
)

function objectiveValidationException(validation) {
    return {
        type: NEW_OBJECTIVE_VE, payload: validation
    }
}

function validationException(validation) {
    return {
        type: MISSION_NEW_VE, payload: validation
    }
}

function requestInProgress() {
    return {
        type: MISSION_NEW_FIRED
    }
}