import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyView extends PureComponent {
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={style}>
                {this.props.children}
            </ScrollView>
        )
    }
}

const style = {
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
}