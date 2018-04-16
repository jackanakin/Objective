import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';
import {
    MISSION_NEW, MISSION_FIRED
} from '../../reducer/_ActionType';
import { strings } from '../../../locales/_i18n';
import { saveValidate } from '../../entity/Mission';

///LOGIN
export const newMission = (mission) => {
    return dispatch => {
        dispatch(requestInProgress());/*
        const { currentUser } = firebase.auth();
        let encodedCurrentUser = b64.encode(currentUser.email);
        mission.leader = encodedCurrentUser;*/
        delete mission.objectives;
        console.warn(mission);
        console.warn(saveValidate(mission));
        return;

        firebase.database().ref(`missions`)
            .push(mission)
            .then(() => console.warn("sucesso"))
            .catch(erro => console.warn("erro: " + erro));
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

function requestInProgress() {
    return {
        type: MISSION_FIRED
    }
}