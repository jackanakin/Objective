import React, { PureComponent } from 'react';
import { ActionButton } from 'react-native-material-ui';

import { uiTheme } from '../style/theme'

export default class MyActionButton extends PureComponent {
    render() {
        return (
            <ActionButton icon={this.props.icon} style={style} onPress={this.props.onPress} />
        )
    }
}

const style = {
    container: { backgroundColor: uiTheme.palette.secondaryColor }
}