import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

import { uiTheme, errorTextColor } from '../style/theme'

export default class MyTextInput extends Component {
    render() {
        const validationStyle = this.props.vm ? uiTheme.inputTextValidation : null;
        const validationMessage = this.props.vm;

        return (
            <View>
                <TextInput
                    style={[uiTheme.inputText, validationStyle]}
                    placeholderTextColor={[uiTheme.placeholderTextColor]}
                    underlineColorAndroid="transparent" autoCapitalize="none" placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText} />
                {validationMessage ?
                    <Text style={{ color: errorTextColor }}>{validationMessage}</Text> : null
                }
            </View>
        )
    }

    shouldComponentUpdate(nextProps) {
        return this.props.vm !== nextProps.vm;
    }
}