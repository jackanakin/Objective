import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    ImageBackground,
    Button,
    Dimensions,
    Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-material-ui';

//import { View, Text, Button, , Image } from 'react-native';

//const backgroundImage = require('../img/background.jpg');
const screenWidth = Dimensions.get('screen').width;

export default props => (
    <View style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
            <Text style={{
                fontWeight: "bold", fontSize: 30,
                textAlign: "center", color: "white"
            }}> RN JK </Text>
            <Text style={{
                fontWeight: "bold", fontSize: 18,
                color: "white", marginLeft: 10
            }}>Bem vindo</Text>
        </View>
        <View style={{ flex: 5, backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{
                    flex: 1,
                    width: screenWidth * 0.9, flexDirection: 'column',
                    justifyContent: 'space-evenly'
                }} >
                    <Button title="Fazer login" color='gray' onPress={() => Actions.loginScreen()} />
                    <Button title="Continuar com o Google" color='red' onPress={() => Alert.alert("Not supported")} />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{
                    flex: 1,
                    width: screenWidth * 0.9, flexDirection: 'column',
                    justifyContent: 'space-evenly'
                }} >
                    <Button title="Inscreva-se (fb)" onPress={() => Actions.subscribeFirebaseScreen()} />
                    <Button title="Inscreva-se (API)" onPress={() => Alert.alert("Not supported")} />
                    <View>
                        <Icon name="person" />
                    </View>
                </View>
            </View>
        </View>
    </View>
)
