import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { deviceWidth } from '../style/theme'

export default class MyForm extends PureComponent {
    render() {
        return (
            <View style={style}>
                {this.props.children}
            </View>
        )
    }
}

const style = {
    width: deviceWidth * 0.8
}