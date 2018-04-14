import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyPasswordInput extends Component {
    render() {
        return (
            <TextInput placeholderTextColor={uiTheme.placeholderTextColor} secureTextEntry={true} style={style} underlineColorAndroid="transparent"
                autoCapitalize="none" placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} />
        )
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }
}

const style = {
    marginTop: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: uiTheme.palette.primaryTextColor
}