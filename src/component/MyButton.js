import React, { PureComponent } from 'react';
import { Button } from 'react-native-material-ui';

import { uiTheme } from '../style/theme'

export default class MyButton extends PureComponent {
    render() {
        return (
            <Button style={uiTheme.myButton} upperCase={this.props.upperCase} raised primary text={this.props.text}
                onPress={this.props.onPress} />
        )
    }
}