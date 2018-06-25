import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { uiTheme } from '../../style/theme'
import { strings } from '../../../locales/_i18n';

export default class ListMissionMenu extends PureComponent {
    render() {
        return (
            <View style={{
                flexDirection: 'column', justifyContent: 'center',
                backgroundColor: uiTheme.palette.primaryColor, elevation: 4, marginBottom: 4, height: 56,
            }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[myText.container, { marginLeft: 20 }]}>{strings('topMenu.title')}</Text>
                    <TouchableHighlight onPress={() => Actions.loginScreen()}>
                        <Text style={[myText.container, { marginRight: 20 }]}>{strings('topMenu.logout')}</Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

const myText = StyleSheet.create({
    container: {
        color: uiTheme.palette.secondaryTextColor,
        fontSize: 20
    }
});