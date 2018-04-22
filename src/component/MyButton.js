import React, { PureComponent } from 'react';
import { Button } from 'react-native-material-ui';

import { deviceWidth, uiTheme } from '../style/theme'

export default class MyButton extends PureComponent {
    render() {
        return (
            <Button style={uiTheme.button} upperCase={this.props.upperCase} raised
                primary={!this.props.secondary} accent={this.props.secondary}
                text={this.props.text} onPress={this.props.onPress} />
        )
    }
}