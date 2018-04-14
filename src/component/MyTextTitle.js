import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyTextTitle extends PureComponent {
    render() {
        return (
            <Text style={style}>{this.props.text}</Text>
        )
    }
}

const style = {
    fontWeight: 'bold', fontSize: 26, color: uiTheme.palette.primaryTextColor
}