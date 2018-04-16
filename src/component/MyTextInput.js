import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

import { uiTheme, validationColor } from '../style/theme'

export default class MyTextInput extends Component {
    render() {
        const validationStyle = this.props.ve ? uiTheme.inputTextValidation : null;
        return (
            <View>
                <TextInput
                    style={[uiTheme.inputText, validationStyle]}
                    placeholderTextColor={[uiTheme.placeholderTextColor]}
                    underlineColorAndroid="transparent" autoCapitalize="none" placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText} />
                {this.props.ve ?
                    <Text style={{ color: validationColor }}>{this.props.vem}</Text> : null
                }
            </View>
        )
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value || this.props.ve !== nextProps.ve;
    }
}