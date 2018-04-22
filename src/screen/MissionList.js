import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-material-ui';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import MyBackground from '../component/MyBackground'
import MyActionButton from '../component/MyActionButton';
import MyButton from '../component/MyButton';

import { listMission, setMission } from './action/MissionAction';
import { uiTheme } from '../style/theme';

class MissionList extends Component {
    constructor() {
        super();
        this.state = { missionSource: null };
        this._openMission = this._openMission.bind(this);
    }

    componentDidMount() {
        this.props.listMission();
        this.createMissionDataSource(this.props.missionList);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.missionList !== this.props.missionList) {
            this.createMissionDataSource(this.props.missionList);
        }
    }

    createMissionDataSource(missionList) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.setState({ missionSource: ds.cloneWithRows(missionList) });
    }

    _openMission(mission) {
        this.props.setMission(mission);
        Actions.missionView({ title: mission.title });
    }

    renderMission = (mission) => {
        return (
            <TouchableHighlight onPress={() => this._openMission(mission)} >
                <View style={{ flex: 1, padding: 25, borderBottomWidth: 1, borderColor: "#CCC" }}>
                    <Text style={{ fontSize: 18 }}>{mission.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <MyBackground>
                {this.state.missionSource ?
                    <ListView
                        enableEmptySections
                        dataSource={this.state.missionSource}
                        renderRow={this.renderMission} /> : null}
                <MyActionButton onPress={() => Actions.newMission()} />
            </MyBackground>
        )
    }
}

mapStateToProps = state => {
    const missionList = _.map(state.MissionReducer.missionList, (val, uid) => {
        return { ...val, uid }
    })
    return { missionList }
}

export default connect(mapStateToProps, { listMission, setMission })(MissionList);