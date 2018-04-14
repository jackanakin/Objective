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
        const { request } = this.props;

        return (
            <MyBackground>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MyTextTitle text="Login" />
                    <MyProgress animating={request.inProgress} />
                    <MyForm>
                        <MyTextInput placeholder="Usuário" onChangeText={text => this.setState({ username: text })} />
                        <MyPasswordInput placeholder="Senha"
                            onChangeText={text => this.setState({ password: text })} />
                    </MyForm>
                    {
                        request.response ?
                            <MyTextError text={request.response.message} />
                            : null
                    }

                    <MyButton text="Entrar" onPress={this._login} />
                    <MyButton text="Inscreva-se" onPress={() => Actions.subscribeFirebaseScreen()} />
                </View>
            </MyBackground>
        );
    }
}

const mapStateToProps = state => {
    return ({
        request: state.FirebaseReducer.request
    });
}

export default connect(mapStateToProps, {
    login, reset
})(Login);