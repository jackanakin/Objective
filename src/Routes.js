import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

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
                    <Scene key="start" onBack={() => Actions.pop()}
                        navigationBarStyle={navBarStyle.navigationBarStyle}
                        titleStyle={navBarStyle.titleStyle}
                        leftButtonTextStyle={navBarStyle.leftButtonTextStyle}
                        backButtonTintColor={navBarStyle.backButtonTintColor}>

                        <Scene key='loginScreen' component={Login} title="Login" hideNavBar />
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