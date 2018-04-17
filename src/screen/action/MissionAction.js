import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
    MISSION_NEW, MISSION_FIRED, MISSION_VE, MISSION_NEW_ERROR
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';
import { saveValidate, buildMissionObject } from '../../entity/Mission';

///LOGIN
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
                .then(() => console.warn("sucesso"))
                .catch(error => newMissionError(error.message, dispatch));
        }
    }
}/*
export const adicionaContato = email => {
    return dispatch => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    //email do contato que queremos adicionar
                    const dadosUsuario = _.first(_.values(snapshot.val()));
                    console.log(dadosUsuario);

                    //email do usuário autenticado
                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch))

                } else {
                    dispatch(
                        {
                            type: ADICIONA_CONTATO_ERRO,
                            payload: 'E-mail informado não corresponde a um usuário válido!'
                        }
                    )
                }
            })
    }
}*/

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
        type: MISSION_VE, payload: validation
    }
}

function requestInProgress() {
    return {
        type: MISSION_FIRED
    }
}