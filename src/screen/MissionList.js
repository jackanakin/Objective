import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';

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
        let list = null;
        if (!_.isEmpty(this.props.missionList)) {
            const filteredList = _.filter(this.props.missionList, function (obj) {
                return obj.status === 'a';
            });

            list = _.map(filteredList, (val, key) => {
                if (val.status == 'a') {
                    return val.mission;
                }
            });
        }
        console.warn(list);
        //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        //this.setState({ missionSource: ds.cloneWithRows(missionList) });
    }

    _openMission(mission) {
        this.props.setMission(mission);
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