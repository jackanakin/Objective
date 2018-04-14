import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyStatusBar extends PureComponent {
    render() {
        return (
            <StatusBar backgroundColor={uiTheme.palette.primaryDarkColor} />
        );
    }
}


