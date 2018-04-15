import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { deviceWidth, uiTheme } from '../style/theme'

export default class MyLargeIconButton extends PureComponent {
    render() {
        return (
            <View style={[uiTheme.button.container, { width: deviceWidth * 0.8 }]}>
                <Icon.Button name={this.props.icon} backgroundColor={this.props.backgroundColor}
                    onPress={this.props.onPress} style={iconStyle}>
                    <Text style={{ fontFamily: uiTheme.fontFamily, color: uiTheme.palette.secondaryTextColor, fontWeight: 'bold' }}>
                        {this.props.text.toUpperCase()}
                    </Text>
                </Icon.Button>
            </View>
        )
    }
}

const iconStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}
