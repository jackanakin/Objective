import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
    NEW_PARTICIPANT_FIRED, NEW_PARTICIPANT_ERROR, NEW_PARTICIPANT_VE, NEW_PARTICIPANT_SUCCESS
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';
import { saveValidate, buildMissionObject } from '../../entity/Mission';
import * as Toast from '../../util/Toast';
import { validateEmail } from '../../util/JsUtil';

export const newParticipant = (email, missionUID) => {
    return dispatch => {
        if (validateEmail(email)) {
            dispatch({ type: NEW_PARTICIPANT_FIRED });
            let encodedCurrentUser = b64.encode(email);
            console.log("------------");
            console.log(encodedCurrentUser);
            console.log(missionUID);
            console.log("------------");//VALIDAR E-MAIL JÁ CADASTRADO
            firebase.database().ref(`mission_account/${missionUID}/${encodedCurrentUser}`)
                .push({ status: 'a' })
                .then(() => {
                    firebase.database().ref(`account_mission/${encodedCurrentUser}/${missionUID}`)
                        .push({ status: 'a' })
                        .then(() => newParticipantSuccess(dispatch))
                        .catch(error => newParticipantError(error.message, dispatch));
                })
                .catch(error => newParticipantError(error.message, dispatch));
        } else {
            let validation = {};
            validation.email = "validation.newParticipant.email";
            dispatch({ type: NEW_PARTICIPANT_VE, payload: validation });
        }
    }
}

const newParticipantSuccess = (dispatch) => {
    dispatch({ type: NEW_PARTICIPANT_SUCCESS });
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