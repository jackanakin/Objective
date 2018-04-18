import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { strings } from '../locales/_i18n';

import Login from './screen/LoginFirebase';
import SubscribeFirebase from './screen/SubscribeFirebase';
import Home from './screen/Home';
import TabView from './screen/TabView';
import NewMission from './screen/NewMission';

import { navBarStyle } from './style/navigationBar';

export default class Routes extends PureComponent {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar onBack={() => Actions.pop()}
                    navigationBarStyle={navBarStyle.navigationBarStyle}
                    titleStyle={navBarStyle.titleStyle}
                    leftButtonTextStyle={navBarStyle.leftButtonTextStyle}
                    backButtonTintColor={navBarStyle.backButtonTintColor}>

                    <Scene key="start" >
                        <Scene key='loginScreen' component={Login} title={strings('login.title')} hideNavBar />
                        <Scene key='subscribeFirebaseScreen' component={SubscribeFirebase}
                            title={strings('subscription.title')} />
                    </Scene>

                    <Scene initial key="app">
                        <Scene hideNavBar key='appHome' component={TabView} />
                        <Scene key='newMission' component={NewMission} title={strings('newMission.screenTitle')} />
                    </Scene>

                </Scene>
            </Router>
        )
    }
}