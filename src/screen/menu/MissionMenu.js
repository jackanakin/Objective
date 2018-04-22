import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import MyStatusBar from '../../component/MyStatusBar';
import { uiTheme } from '../../style/theme'
import { strings } from '../../../locales/_i18n';
import MyTextTab from '../../component/MyTextTab';

export default class MissionMenu extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: uiTheme.palette.primaryDarkColor, elevation: 3, marginBottom: 1 }}>
                <TabBar {...this.props} style={{
                    backgroundColor: uiTheme.palette.primaryColor,
                    elevation: 0
                }} indicatorStyle={{ backgroundColor: uiTheme.palette.secondaryColor }} />
            </View>
        );
    }
}
