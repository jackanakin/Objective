import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MyMediumIconButton from './MyMediumIconButton';
import { uiTheme, errorTextColor } from '../style/theme'

export default class MyDatePickerStart extends PureComponent {
    render() {
        const validationMessage = this.props.vm;

        return (
            <View style={{ alignItems: 'center', }}>
                <MyMediumIconButton icon="clock-o" backgroundColor={uiTheme.palette.secondaryColor}
                    onPress={this.props.toggleDatePicker} text={this.props.text.toUpperCase()} />
                <DateTimePicker date={this.props.date}
                    isVisible={this.props.isVisible}
                    onConfirm={this.props.onConfirm}
                    onCancel={this.props.toggleDatePicker}
                />
                {validationMessage ?
                    <Text style={{ color: errorTextColor }}>{validationMessage}</Text> : null
                }
            </View>
        );
    }

}