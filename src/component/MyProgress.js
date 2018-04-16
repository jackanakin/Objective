import React, { PureComponent } from 'react';
import {
    ActivityIndicator
} from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyProgress extends PureComponent {
    render() {
        return (
            this.props.animating ?
                <ActivityIndicator size="large" color={uiTheme.palette.primaryColor} />
                : null
        )
    }
}