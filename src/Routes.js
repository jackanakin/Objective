import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import Welcome from './screen/Welcome';

import Login from './screen/LoginFirebase';
import SubscribeFirebase from './screen/SubscribeFirebase';
import Home from './screen/Home';
import TabView from './screen/TabView';

import { navBarStyle } from './style/navigationBar';

export default class Routes extends PureComponent {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar>
                    <Scene key="start" onBack={() => Actions.welcomeScreen()}
                        navigationBarStyle={navBarStyle.navigationBarStyle}
                        titleStyle={navBarStyle.titleStyle}
                        leftButtonTextStyle={navBarStyle.leftButtonTextStyle}
                        backButtonTintColor={navBarStyle.backButtonTintColor}>

                        <Scene key='welcomeScreen' hideNavBar component={Welcome} title="Welcome" />
                        <Scene key='loginScreen' component={Login} title="Login" />
                        <Scene key='subscribeFirebaseScreen' component={SubscribeFirebase} title="Firebase Subscribe" />
                    </Scene>
                    <Scene  key="app">
                        <Scene  hideNavBar key='appHome' component={TabView} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}