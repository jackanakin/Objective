import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyTextInput extends Component {
    render() {
        return (
            <TextInput style={uiTheme.myTextInput} underlineColorAndroid="transparent" autoCapitalize="none"
                placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} />
        )
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }
}