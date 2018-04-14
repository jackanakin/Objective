import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyText extends PureComponent {
    render() {
        return (
            <Text style={uiTheme.palette.primaryTextColor}>{this.props.text}</Text>
        )
    }
}