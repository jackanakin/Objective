import React, { PureComponent } from 'react';
import { Button } from 'react-native-material-ui';

import { deviceWidth } from '../style/theme'

export default class MyButton extends PureComponent {
    render() {
        return (
            <Button style={style} upperCase={this.props.upperCase} raised primary text={this.props.text}
                onPress={this.props.onPress} />
        )
    }
}

const style = {
    container: {
        marginTop: 20,
        height: 40,
        width: deviceWidth * 0.8
    }
}