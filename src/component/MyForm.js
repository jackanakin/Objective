import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyForm extends PureComponent {
    render() {
        return (
            <View style={uiTheme.myForm}>
                {this.props.children}
            </View>
        )
    }
}