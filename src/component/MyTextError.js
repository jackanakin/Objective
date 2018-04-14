import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyTextError extends PureComponent {
    render() {
        return (
            <Text style={style}>{this.props.text}</Text>
        )
    }
}

const style = {
    marginTop: 15,
    color: uiTheme.palette.errorTextColor,
    fontWeight: 'bold'
}