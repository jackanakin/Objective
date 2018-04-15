import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MyMediumIconButton from './MyMediumIconButton';
import { uiTheme } from '../style/theme'

export default class MyDatePickerEnd extends PureComponent {
    render() {
        return (
            <View style={{ alignItems: 'center', }}>
                <MyMediumIconButton icon="hourglass" backgroundColor={uiTheme.palette.secondaryColor}
                    onPress={this.props.toggleDatePicker} text={this.props.text.toUpperCase()} />
                <DateTimePicker date={this.props.date}
                    isVisible={this.props.isVisible}
                    onConfirm={this.props.onConfirm}
                    onCancel={this.props.toggleDatePicker}
                />
            </View>
        );
    }

}