import React, { Component } from 'react';
import {
    Alert
} from 'react-native';

import { connect } from 'react-redux';
import { subscribe, reset } from './action/FirebaseAction';
import { strings } from '../../locales/_i18n';

import MyTextInput from '../component/MyTextInput'
import MyButton from '../component/MyButton'
import MyTextTitle from '../component/MyTextTitle'
import MyForm from '../component/MyForm'
import MyTextError from '../component/MyTextError'
import MyPasswordInput from '../component/MyPasswordInput'
import MyProgress from '../component/MyProgress'
import MyBackground from '../component/MyBackground'
import MyView from '../component/MyView';

class SubscribeFirebase extends Component {
    constructor() {
        super();
        this.state = {
            name: "", username: "", password: "", confirmPassword: ""
        }
    }

    componentDidMount() {
        this.props.reset();
    }

    _subscribe = () => {
        const { name, username, password, confirmPassword } = this.state;
        this.props.subscribe({ username, password, confirmPassword, name });
    }

    render() {
        const { subscribeRequest } = this.props;
        return (
            <MyBackground>
                <MyView>
                    <MyTextTitle text="Inscrição" />
                    <MyProgress animating={subscribeRequest.inProgress} />
                    <MyForm>
                        <MyTextInput placeholder={strings('subscription.username')} onChangeText={text => this.setState({ name: text })} />
                        <MyTextInput placeholder="Usuário" onChangeText={text => this.setState({ username: text })} />
                        <MyPasswordInput placeholder="Senha"
                            onChangeText={text => this.setState({ password: text })} />
                        <MyPasswordInput placeholder="Confirmação da senha"
                            onChangeText={text => this.setState({ confirmPassword: text })} />
                    </MyForm>
                    {
                        subscribeRequest.response ?
                            <MyTextError text={subscribeRequest.response.message} />
                            : null
                    }
                    {
                        subscribeRequest.message ?
                            <MyTextError text={subscribeRequest.message} />
                            : null
                    }

                    <MyButton text={strings('subscription.subscribe_button')} onPress={this._subscribe} />
                </MyView>
            </MyBackground>
        );
    }
}

const mapStateToProps = state => {
    return ({
        subscribeRequest: state.FirebaseReducer.subscribeRequest
    });
}

export default connect(mapStateToProps, {
    subscribe, reset
})(SubscribeFirebase);