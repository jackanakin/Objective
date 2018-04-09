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
    AsyncStorage,
    StyleSheet,
    Dimensions
} from 'react-native';

import * as fetch from '../util/fetch';

import User from '../entity/User';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "", password: "", response: ""
        }
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
                    <Button title="Login" onPress={() => false} />
                </View>
                <Text style={styles.message}>
                    {this.state.response}
                </Text>
            </View>
        );
    }
}

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 26
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: width * 0.8
    },
    message: {
        marginTop: 15,
        color: '#e74c3c'
    }
})