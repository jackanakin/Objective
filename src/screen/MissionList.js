import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import MyBackground from '../component/MyBackground'
import MyActionButton from '../component/MyActionButton';
import MyButton from '../component/MyButton';

import { listMission, setMission, unlistMission } from './action/MissionAction';
import { uiTheme } from '../style/theme';

class MissionList extends Component {
    constructor() {
        super();
        this.state = { missionSource: [] };
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

    createMissionDataSource = async (missionList) => {
        if (!_.isEmpty(this.props.missionList)) {
            const filteredList = await Promise.all(_.map(this.props.missionList, async function (obj) {
                let fetch = await firebase.database().ref(`/missions/${obj.mission}/`).once('value');
                fetch = fetch.val();
                fetch.key = obj.mission;
                return fetch;
            }));
            this.setState({ missionSource: filteredList });
        }
    }

    _openMission = (mission) => {
        this.props.setMission(mission);
    }

    renderMission = (object) => {
        return (
            <TouchableHighlight onPress={() => this._openMission(object)} >
                <View style={{ flex: 1, padding: 25, borderBottomWidth: 1, borderColor: "#CCC" }}>
                    <Text style={{ fontSize: 18 }}>{object.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <MyBackground>
                {!_.isEmpty(this.state.missionSource) ?
                    <FlatList
                        data={this.state.missionSource}
                        renderItem={({ item }) => this.renderMission(item)}
                    /> : <Text>empty.result</Text>
                }
                <MyActionButton onPress={() => Actions.newMission()} />
            </MyBackground>
        )
    }

    componentWillUnmount() {
        this.props.unlistMission();
    }
}

mapStateToProps = state => {
    const missionList = _.map(state.MissionReducer.missionList, (val, uid) => {
        return { ...val, uid }
    })
    return { missionList }
}

export default connect(mapStateToProps, { listMission, setMission, unlistMission })(MissionList);