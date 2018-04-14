import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyBackground extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: uiTheme.palette.primaryBackground, flex: 1 }}>
                {this.props.children}
            </View>
        )
    }
}