import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
    MISSION_NEW_FIRED, MISSION_NEW_VE, MISSION_NEW_ERROR, MISSION_NEW_SUCCESS, MISSION_FLIST
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';
import { saveValidate, buildMissionObject } from '../../entity/Mission';
import * as Toast from '../../util/Toast';

export const listMission = () => {
    //const { currentUser } = firebase.auth();

    return (dispatch) => {
        //let emailUsuarioB64 = b64.encode(currentUser.email);

        firebase.database().ref(`/missions/`)
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
                .then(value => newMissionSuccess(dispatch))
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