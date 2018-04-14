import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyTextTab extends PureComponent {
    render() {
        return (
            <Text style={myTextTab}>{this.props.text}</Text>
        )
    }
}

const myTextTab = {
    color: uiTheme.palette.secondaryTextColor,
    fontSize: 20,
    marginLeft: 20
}