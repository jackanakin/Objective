import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyAreaInput extends Component {
    render() {
        return (
            <View style={{
                //backgroundColor: uiTheme.palette.primaryBackground,
                borderBottomColor: uiTheme.palette.primaryTextColor,
                borderBottomWidth: 1
            }}>
                <TextInput placeholderTextColor={uiTheme.placeholderTextColor}
                    multiline={true} maxLength={100}
                    numberOfLines={5}
                    underlineColorAndroid="transparent" autoCapitalize="none" placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText} />
            </View>
        )
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }
}