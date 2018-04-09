import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyTextTitle extends PureComponent {
    render() {
        return (
            <Text style={uiTheme.myTextTitle}>{this.props.text}</Text>
        )
    }
}