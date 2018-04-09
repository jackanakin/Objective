import React, { PureComponent } from 'react';
import {
    ActivityIndicator
} from 'react-native';

import { uiTheme } from '../style/theme'

export default class MyProgress extends PureComponent {
    render() {
        return (
            <ActivityIndicator size="large" color={uiTheme.palette.primaryColor} animating={this.props.animating} />
        )
    }
}