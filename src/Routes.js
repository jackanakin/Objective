import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { strings } from '../locales/_i18n';

import Login from './screen/LoginFirebase';
import SubscribeFirebase from './screen/SubscribeFirebase';
import MissionView from './screen/MissionView';
import NewMission from './screen/NewMission';
import NewParticipant from './screen/NewParticipant';
import NewObjective from './screen/NewObjective';
import MissionList from './screen/MissionList';
import ListMissionMenu from './screen/menu/ListMissionMenu';

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

                    <Scene key="app">
                        <Scene key='appHome' navBar={ListMissionMenu} component={MissionList} />
                        <Scene key='newMission' component={NewMission} title={strings('newMission.screenTitle')} />
                        <Scene key='newParticipant' component={NewParticipant} title={strings('newParticipant.screenTitle')} />
                        <Scene key='missionView' component={MissionView} />
                        <Scene key='newObjective' component={NewObjective} title={strings('newObjective.screenTitle')} />
                    </Scene>

                </Scene>
            </Router>
        )
    }
}