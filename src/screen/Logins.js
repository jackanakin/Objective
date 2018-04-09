import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    Button,
    AsyncStorage
} from 'react-native';
import * as fetch from '../util/fetch';

import { loginStyle } from './loginCss';
import User from '../entity/User';

const styles = loginStyle;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "", password: "", response: ""
        }
    }

    efetuaLogin = async () => {
        const res = fetch.post('public/login', { login: this.state.username, senha: this.state.password });
        console.warn(res);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Template</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Usuário"
                        onChangeText={texto => this.setState({ username: texto })} autoCapitalize="none" />
                    <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="password"
                        onChangeText={texto => this.setState({ password: texto })} secureTextEntry={true} />
                    <Button title="Login" onPress={this.efetuaLogin.bind(this)} />
                </View>
                <Text style={styles.message}>
                    {this.state.response}
                </Text>
            </View>
        );
    }
}