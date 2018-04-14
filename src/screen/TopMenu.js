import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import MyStatusBar from '../component/MyStatusBar';
import { uiTheme } from '../style/theme'
import { strings } from '../../locales/_i18n';
import MyTextTab from '../component/MyTextTab';

export default class TopMenu extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: uiTheme.palette.primaryDarkColor, elevation: 3, marginBottom: 1 }}>

                <MyStatusBar />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 40, justifyContent: 'center' }}>
                        <MyTextTab text={strings('app.title')} />
                    </View>

                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                        <View style={{ justifyContent: 'center', width: 40, alignItems: 'center' }}>
                            {/*touchable*/}
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <MyTextTab text={strings('topMenu.logout')} />
                        </View>
                    </View>
                </View>

                <TabBar {...this.props} style={{
                    backgroundColor: uiTheme.palette.primaryColor,
                    elevation: 0
                }} indicatorStyle={{ backgroundColor: uiTheme.palette.secondaryColor }} />
            </View>
        );
    }
}

