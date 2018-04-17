import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import {
    FIREBASE_SUB_SUCCESS, FIREBASE_SUB_ERROR, FIREBASE_SUB_FIRED, FIREBASE_SUB_RESET,
    FIREBASE_LOG_FIRED, FIREBASE_LOG_SUCCESS, FIREBASE_LOG_ERROR, FIREBASE_SUB_INVALID
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';

///LOGIN
export const login = ({ username, password }) => {
    return dispatch => {
        dispatch(loginInProgress());
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(value => loginSuccess(dispatch))
            .catch(erro => loginError(erro, dispatch));
    }
}

const loginSuccess = (dispatch) => {
    dispatch({ type: FIREBASE_LOG_SUCCESS });
    Actions.appHome();
}

function loginInProgress() {
    return {
        type: FIREBASE_LOG_FIRED
    }
}

const loginError = (response, dispatch) => {
    dispatch({ type: FIREBASE_LOG_ERROR, payload: response });
}

///SUBSCRIBE
export const subscribe = ({ username, password, confirmPassword, name }) => {
    return dispatch => {
        dispatch(subscribeInProgress());
        if (name.length <= 1) {
            validationError(strings('subscription.invalidName'), dispatch);
        } else if (password !== confirmPassword) {
            validationError(strings('subscription.unmatchPassword'), dispatch);
        } else {
            firebase.auth().createUserWithEmailAndPassword(username, password)
                .then(username => {
                    let emailB64 = b64.encode(username);

                    firebase.database().ref('/accounts/' + emailB64)
                        .push({ name: name.trim() })
                        .then(value => loginSuccess(dispatch));
                    subscribeSuccess(dispatch)
                })
                .catch(response => requestError(response, dispatch));
        }
    }
}

export const reset = () => {
    return dispatch => {
        dispatch({ type: FIREBASE_SUB_RESET });
    }
}

function subscribeInProgress() {
    return {
        type: FIREBASE_SUB_FIRED
    }
}

const subscribeSuccess = (dispatch) => {
    dispatch({ type: FIREBASE_SUB_SUCCESS });
    Actions.loginScreen();
    // TOAST DE SUCCESSO
}

const validationError = (message, dispatch) => {
    dispatch({ type: FIREBASE_SUB_INVALID, payload: message });
}

const requestError = (response, dispatch) => {
    dispatch({ type: FIREBASE_SUB_ERROR, payload: response });
}