import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import {
    FIREBASE_SUB_SUCCESS, FIREBASE_SUB_ERROR, FIREBASE_SUB_FIRED, FIREBASE_SUB_RESET,
    FIREBASE_LOG_FIRED, FIREBASE_LOG_SUCCESS, FIREBASE_LOG_ERROR
} from '../../reducer/_ActionType';

///LOGIN
export const login = ({ username, password }) => {
    return dispatch => {
        dispatch(subscribeInProgress());
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(value => loginSuccess(dispatch))
            .catch(erro => requestError(erro, dispatch));
    }
}

const loginSuccess = (dispatch) => {
    dispatch({ type: FIREBASE_LOG_SUCCESS });
    Actions.appHome();
}

///SUBSCRIBE
export const subscribe = ({ username, password }) => {
    return dispatch => {
        dispatch(subscribeInProgress());
        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then(username => {
                const emailB64 = b64.encode(username);

                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome: "" });
                //.then(value => cadastroUsuarioSucesso(dispatch));
                subscribeSuccess(dispatch)
            })
            .catch(response => requestError(response, dispatch));
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

const requestError = (response, dispatch) => {
    dispatch({ type: FIREBASE_SUB_ERROR, payload: response });
}