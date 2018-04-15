import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyView extends PureComponent {
    render() {
        return (
            <View style={style}>
                {this.props.children}
            </View>
        )
    }
}

const style = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}