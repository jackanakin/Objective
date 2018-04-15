import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyPasswordInput extends Component {
    render() {
        return (
            <TextInput placeholderTextColor={uiTheme.placeholderTextColor} secureTextEntry={true} style={uiTheme.inputText} underlineColorAndroid="transparent"
                autoCapitalize="none" placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} />
        )
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }
}