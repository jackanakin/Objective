import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyTextError extends PureComponent {
    render() {
        return (
            <Text style={uiTheme.myTextError}>{this.props.text}</Text>
        )
    }
}