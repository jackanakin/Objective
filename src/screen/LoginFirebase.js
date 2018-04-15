import React, { Component } from 'react';
import {
    View,
    Alert
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { login, reset } from './action/FirebaseAction';
import { uiTheme } from '../style/theme';

import MyTextInput from '../component/MyTextInput'
import MyButton from '../component/MyButton'
import MyTextTitle from '../component/MyTextTitle'
import MyForm from '../component/MyForm'
import MyTextError from '../component/MyTextError'
import MyPasswordInput from '../component/MyPasswordInput'
import MyProgress from '../component/MyProgress'
import MyBackground from '../component/MyBackground';
import MyView from '../component/MyView';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "", password: ""
        }
    }

    componentDidMount() {
        this.props.reset();
    }

    _login = () => {
        const { username, password } = this.state;
        this.props.login({ username, password });
    }

    render() {
        const { loginRequest } = this.props;

        return (
            <MyBackground>
                <MyView>
                    <MyTextTitle text="Login" />
                    <MyProgress animating={loginRequest.inProgress} />
                    <MyForm>
                        <MyTextInput placeholder="Usuário" onChangeText={text => this.setState({ username: text })} />
                        <MyPasswordInput placeholder="Senha"
                            onChangeText={text => this.setState({ password: text })} />
                    </MyForm>
                    {
                        loginRequest.response ?
                            <MyTextError text={loginRequest.response.message} />
                            : null
                    }

                    <MyButton text="Entrar" onPress={this._login} />
                    <MyButton text="Inscreva-se" onPress={() => Actions.subscribeFirebaseScreen()} />
                </MyView>
            </MyBackground>
        );
    }
}

const mapStateToProps = state => {
    return ({
        loginRequest: state.FirebaseReducer.loginRequest
    });
}

export default connect(mapStateToProps, {
    login, reset
})(Login);