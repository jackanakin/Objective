import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
    NEW_PARTICIPANT_FIRED, NEW_PARTICIPANT_ERROR, NEW_PARTICIPANT_VE,
    NEW_PARTICIPANT_SUCCESS, PARTICIPANT_FLIST
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';
import { saveValidate, buildMissionObject } from '../../entity/Mission';
import * as Toast from '../../util/Toast';
import { validateEmail } from '../../util/JsUtil';

export const listParticipant = (missionUID) => {
    return (dispatch) => {
        firebase.database().ref(`/mission_account/${missionUID}`)
            .on("value", snapshot => {
                dispatch({ type: PARTICIPANT_FLIST, payload: snapshot.val() })
            });
    }
}

export const unlistParticipant = (missionUID) => {
    return (dispatch) => {
        firebase.database().ref(`/mission_account/${missionUID}`).off("value");
    }
}

export const newParticipant = (successCallback, email, missionUID) => {
    return dispatch => {
        if (validateEmail(email)) {
            dispatch({ type: NEW_PARTICIPANT_FIRED });
            let encodedCurrentUser = b64.encode(email);
            firebase.database().ref(`/mission_account/${missionUID}`)
                .orderByChild('account').equalTo(encodedCurrentUser).limitToFirst(1)
                .once('value')
                .then(function (snapshot) {
                    let foundHim = _.first(_.values(snapshot.val()));
                    if (foundHim === undefined) {
                        firebase.database().ref(`mission_account/${missionUID}`)
                            .push({ account: encodedCurrentUser, status: 'a' })
                            .then(() => {
                                firebase.database().ref(`account_mission/${encodedCurrentUser}`)
                                    .push({ mission: missionUID, status: 'a' })
                                    .then(() => newParticipantSuccess(email, dispatch))
                                    .then(() => successCallback())
                                    .catch(error => newParticipantError(error.message, dispatch));
                            })
                            .catch(error => newParticipantError(error.message, dispatch));
                    } else {
                        let validation = {};
                        validation.email = "validation.newParticipant.alreadyParticipant";
                        newParticipantVE(validation, dispatch);
                    }
                })
                .catch(error => newParticipantError(error.message, dispatch));
        } else {
            let validation = {};
            validation.email = "validation.newParticipant.email";
            newParticipantVE(validation, dispatch);
        }
    }
}

const newParticipantVE = (validation, dispatch) => {
    dispatch(
        {
            type: NEW_PARTICIPANT_VE,
            payload: validation
        }
    )
}

const newParticipantSuccess = (email, dispatch) => {
    dispatch({ type: NEW_PARTICIPANT_SUCCESS, payload: email });
    Toast.short(strings('newParticipant.newParticipantSuccess'));
}

const newParticipantError = (error, dispatch) => (
    dispatch(
        {
            type: NEW_PARTICIPANT_ERROR,
            payload: error
        }
    )
)