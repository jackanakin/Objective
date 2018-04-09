import React, { Component } from 'react';
import {
    View,
    Alert
} from 'react-native';

import { connect } from 'react-redux';
import { subscribe, reset } from './action/FirebaseAction';

import MyTextInput from '../component/MyTextInput'
import MyButton from '../component/MyButton'
import MyTextTitle from '../component/MyTextTitle'
import MyForm from '../component/MyForm'
import MyTextError from '../component/MyTextError'
import MyPasswordInput from '../component/MyPasswordInput'
import MyProgress from '../component/MyProgress'

class SubscribeFirebase extends Component {
    constructor() {
        super();
        //console.ignoredYellowBox = ['Setting a timer'];
        this.state = {
            username: "", password: "", confirmPassword: ""
        }
    }

    componentDidMount() {
        this.props.reset();
    }

    _subscribe = () => {
        const { username, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            Alert.alert("As senhas não conferem");
        } else {
            this.props.subscribe({ username, password });
        }
    }

    render() {
        const { request } = this.props;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <MyTextTitle text="Subscribe" />
                <MyProgress animating={request.inProgress} />
                <MyForm>
                    <MyTextInput placeholder="Usuário" onChangeText={text => this.setState({ username: text })} />
                    <MyPasswordInput placeholder="Senha"
                        onChangeText={text => this.setState({ password: text })} />
                    <MyPasswordInput placeholder="Confirmação da senha"
                        onChangeText={text => this.setState({ confirmPassword: text })} />
                </MyForm>
                {
                    request.response ?
                        <MyTextError text={request.response.message} />
                        : null
                }

                <MyButton text="Inscrever-se" onPress={this._subscribe} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        response: state.FirebaseReducer.response,
        request: state.FirebaseReducer.request
    });
}

export default connect(mapStateToProps, {
    subscribe, reset
})(SubscribeFirebase);