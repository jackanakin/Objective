import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Mission from './Mission';
import { strings } from '../../locales/_i18n';
import MissionMenu from './menu/MissionMenu';
import ParticipantList from './ParticipantList';

export default class MissionView extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: strings('missionView.wall') },
            { key: '2', title: strings('missionView.participants') },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <MissionMenu {...props} />;

    _renderScene = SceneMap({
        '1': Mission,
        '2': ParticipantList
    });

    render() {
        return (
            <TabViewAnimated navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange} />
        );
    }
}